import json

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
    possible_channels = [
        [j for j in set(models.Interest.objects.get(name=i).channels.all())]
        for i in interests
    ]
    print(possible_channels)
    channel = utils.most_frequent((possible_channels))
    print(possible_channels)
    return JsonResponse({channel: channel})


def get_all_interests_view(request):
    qs = list(map(lambda q: q[1], list(models.Interest.objects.all().values_list())))
    return JsonResponse(qs, safe=False)
