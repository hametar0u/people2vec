from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("calculate_feature_statistics", views.calculate_feature_statistics, name="calculate_feature_statistics"),
    path("get_FID_scores", views.get_FID_scores, name="get_FID_scores"),
]