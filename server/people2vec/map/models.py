from django.db import models

# Create your models here.


class APIKey(models.Model):
    key = models.CharField(max_length=200)

    def __str__(self):
        return self.key