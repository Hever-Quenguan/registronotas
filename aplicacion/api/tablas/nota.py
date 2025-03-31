from django.db import models
from .estudiantes import Estudiantes
from .evaluacion import Evaluacion

class Nota(models.Model):
    estudiante = models.ForeignKey(Estudiantes, on_delete=models.CASCADE)
    evaluacion = models.ForeignKey(Evaluacion, on_delete=models.CASCADE)
    calificacion = models.FloatField()