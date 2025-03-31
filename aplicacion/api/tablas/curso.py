from django.db import models

class Curso(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    creado = models.DateTimeField(auto_now_add=True)