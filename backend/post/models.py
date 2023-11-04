from django.db import models

# Create your models here.

class User(models.Model):
    # id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    age = models.IntegerField()
    image = models.ImageField(upload_to = "", blank=True, null=True)
