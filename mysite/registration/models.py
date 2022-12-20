from django.contrib.auth.models import User
from django.db import models

# Create your models here.

# lets us explicitly set upload path and filename
from django.db import models

class ImageModel(models.Model):
    title = models.TextField(max_length=200)
    image = models.ImageField(upload_to='images/')
    description = models.TextField(max_length=10000)
    user = models.TextField(max_length=100)

    def __str__(self):
        return self.title