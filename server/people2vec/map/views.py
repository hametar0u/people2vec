from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from map.models import APIKey


def index(request):
    return HttpResponse("Hello, world.")

def get_map_key(request):
    k = APIKey.objects.first().key
    return HttpResponse(k)