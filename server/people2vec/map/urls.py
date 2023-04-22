from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("get-map-key", views.get_map_key, name="map key"),
]