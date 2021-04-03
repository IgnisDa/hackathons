import json
import random
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from . import models, utils


def index(request):
    return render(request, "chat/index.html")


def room(request, room_name):
    return render(request, "chat/room.html", {"room_name": room_name})


@csrf_exempt
def induct_view(request):
    data = json.loads(request.body.decode())
    interests = data["interests"]
    possible_channels = []
    for i in interests:
        for j in set(models.Interest.objects.get(name=i).channels.all()):
            possible_channels.append(j.name)

    if len(possible_channels) == 0:
        channel = random.choice(models.Channel.objects.all())
        for i in interests:
            channel.interests.add(models.Interest.objects.get(name=i))
            channel.save()
        channel = channel.name
    else:
        channel = utils.most_frequent((possible_channels))
        channel_obj = models.Channel.objects.get(name=channel)
        for i in interests:
            if i not in channel_obj.interests.all():
                channel_obj.interests.add(models.Interest.objects.get(name=i))
                channel_obj.save()

    return JsonResponse({channel: channel})


def get_all_interests_view(request):
    qs = list(map(lambda q: q[1], list(models.Interest.objects.all().values_list())))
    return JsonResponse(qs, safe=False)
