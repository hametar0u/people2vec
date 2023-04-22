from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    age = models.IntegerField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    statistics_link = models.CharField(max_length=200)