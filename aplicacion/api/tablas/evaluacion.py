from django.db import models
from .clase import Clase

class Evaluacion(models.Model):
    clase = models.ForeignKey(Clase, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=200)
    fecha = models.DateField()
    ponderacion = models.FloatField()  # Peso de la evaluación