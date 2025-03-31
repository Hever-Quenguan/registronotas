from django.db import models
from .estudiantes import Estudiantes
from .clase import Clase

class Asistencia(models.Model):
    estudiante = models.ForeignKey(Estudiantes, on_delete=models.CASCADE)
    clase = models.ForeignKey(Clase, on_delete=models.CASCADE)
    fecha = models.DateField()
    presente = models.BooleanField(default=True)