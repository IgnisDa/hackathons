from django.http import JsonResponse
from django.shortcuts import render

from . import models, utils


def index(request):
    return render(request, "chat/index.html")


def room(request, room_name):
    return render(request, "chat/room.html", {"room_name": room_name})


def induct_view(request):
    data = request.data
    interests = data["interests"]
    possible_channels = []
    possible_channels = [
        [j for j in set(models.Interest.objects.get(pk=i).channels)] for i in interests
    ]
    channel = utils.most_frequent(possible_channels)
    print(possible_channels)
    return JsonResponse({channel: channel})
