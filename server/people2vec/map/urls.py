from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("get-map-key", views.get_map_key, name="map key"),
    path("get-source-coords", views.get_user_coords, name="get_user_coords"),
    path("get-all-coords", views.get_all_coords, name="get_all_coords"),
]