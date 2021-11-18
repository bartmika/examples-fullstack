from django.db import models

class Note(models.Model):
    title = models.TextField()
    category = models.TextField()
    text = models.TextField()
