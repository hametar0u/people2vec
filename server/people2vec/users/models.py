from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    email = models.CharField(max_length=200)
    phone = models.CharField(max_length=200)
    description = models.CharField(max_length=5000)
    latitude = models.FloatField()
    longitude = models.FloatField()
    