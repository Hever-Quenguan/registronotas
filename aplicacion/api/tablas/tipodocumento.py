from django.db import models

class TipoDocumento(models.Model):
    descrip = models.CharField(max_length=100)