from django.shortcuts import render
from django.http import JsonResponse
from django.core.serializers.json import DjangoJSONEncoder
import json

from users.models import User

# Create your views here.
from django.http import HttpResponse
from map.models import APIKey


def index(request):
    return HttpResponse("Hello, world.")

def get_map_key(request):
    k = APIKey.objects.first().key
    return HttpResponse(k)

def get_user_coords(request):
    return JsonResponse({"coords": [50, 40]}) # TEMPORARY

def get_all_coords(request):
    users = User.objects.all()
    data = {"type": "FeatureCollection", "features":[]}
    for user in users:
        data["features"].append({
            "type": "Feature", 
            "properties": {"name": user.username, "scalerank": 1, "featureclass": "people"}, # change scalerank to depend on similarity? 
            "geometry": {"type":"Point","coordinates":[user.latitude,user.longitude]}
        })

    serialized_query = json.dumps(data, cls=DjangoJSONEncoder)
    return HttpResponse(serialized_query)