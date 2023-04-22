from django.shortcuts import render
from django.http import HttpResponse
from users.models import User

# Create your views here.

def index(request):
    return HttpResponse("hello world")

def calculate_feature_statistics(request):
    user1 = User.get(request.user1)
    user2 = User.get(request.user2)
    match_type = request.match_type

    if match_type == "thumbnail":
        pass

    elif match_type == "string":
        pass

    #compute something

    return HttpResponse() #mu, sigma

def get_FID_scores(request):
    #assume feature statistics have been computed


    return HttpResponse()

