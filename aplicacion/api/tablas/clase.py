from django.db import models
from .curso import Curso
from .profesor import Profesor


class Clase(models.Model):
    curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    profesor = models.ForeignKey(Profesor, on_delete=models.CASCADE)
    horario = models.CharField(max_length=250)
    semestre = models.CharField(max_length=100)