from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound
from rest_framework.decorators import api_view
import json

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

@api_view(['POST'])
def signup(request):
    # do some parsing shit
    location = request.data.location
    latitude, longitude = (0,0) #TEMPORARY; DO GEOCODING SHIT
    try:

        user = User(username = request.data.username, 
                    password = request.data.password, 
                    age = request.data.age, 
                    latitude = latitude,
                    longitude = longitude,
                    statistics_link = request.statistics_link # REPLACE THIS WITH THE STRING FILE
                    )
        
        user.save()

        return HttpResponse("account created")
    except:
        return HttpResponse("Sum Ting Wong", status_code=500)
    
@api_view(['GET'])
def get_user_data(request):
    try:
        user = User.objects.get(username=request.data.username)
    except:
        return HttpResponseNotFound("user not found")
    
    return json.dumps({
        "username": user.username,
        "location": [user.latitude, user.longitude],
        "age": user.age,
    })