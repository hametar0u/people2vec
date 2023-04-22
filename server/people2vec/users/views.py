from django.shortcuts import render
from django.http import HttpResponse
from users.models import User

# Create your views here.
def index(request):
    return HttpResponse("hello world")

def login(request):
    user = User.get(username = request.username, password = request.password)
    if not user:
        return HttpResponse("user not found", status_code=404)
    
    else:
        return HttpResponse("logged in", status_code=200)


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