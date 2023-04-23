from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound
from rest_framework.decorators import api_view

from users.models import User

# Create your views here.
def index(request):
    return HttpResponse("hello world")

@api_view(['POST'])
def login(request):
    username = request.data.get('username', '')
    password = request.data.get('password', '')
    try:
        user = User.objects.get(username = username, password = password)
    except:
        return HttpResponseNotFound("invalid login")

    return HttpResponse("logged in")


def signup(request):
    # do some parsing shit
    try:

        user = User(username = request.username, 
                    password = request.password, 
                    age = request.age, 
                    latitude = request.latitude,
                    longitude = request.longitude,
                    statistics_link = request.statistics_link
                    )
        
        user.save()

        return HttpResponse("account created")
    except:
        return HttpResponse("Sum Ting Wong", status_code=500)