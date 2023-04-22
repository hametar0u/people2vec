from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=200)
    password = models.CharField(max_length=200)
    age = models.IntegerField()
    vec = models.TextField()


class APIKey(models.Model):
    key = models.CharField(max_length=200)

    def __str__(self):
        return self.key