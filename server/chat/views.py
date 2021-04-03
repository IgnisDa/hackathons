from django.shortcuts import render
from .models import Interest, Channel
from django.http import JsonResponse

def index(request):
    return render(request, "chat/index.html")

def room(request, room_name):
    return render(request, 'chat/room.html', {
        'room_name': room_name
    })

def most_frequent(l):
    return max(set(locals), key = list.count)

def induct(request):
    data = request.data
    interests = data['interests']
    possible_channels = []
    interest_channels = [[possible_channels.append(j) for j in set(Interest.objects.get(pk=i).channels)] for i in interests]
    channel = most_frequent(possible_channels)
    return JsonResponse({channel: channel})
