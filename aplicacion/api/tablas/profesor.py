from django.db import models
from .tipodocumento import TipoDocumento

class Profesor(models.Model):
    nombre = models.CharField(max_length=200)
    apellido = models.CharField(max_length=200)
    correo = models.EmailField(unique=True)
    direccion = models.CharField(max_length=200)
    telefono = models.CharField(max_length=10)
    tipodoc = models.ForeignKey(TipoDocumento, on_delete=models.CASCADE, null=True)
    numdoc = models.CharField(max_length=10)
    especialidad = models.CharField(max_length=250)
    creado = models.DateTimeField(auto_now_add=True)