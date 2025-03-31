from ..models import Clase
from rest_framework import serializers


class ClaseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Clase
        fields = ['curso', 'profesor', 'horario', 'semestre']  

    def create(self, validated_data):
        # Crear el usuario y guardar en la db
        cla = clase(
            nombre=validated_data['nombre'],
            profesor=validated_data['profesor'],
            horario=validated_data['horario'],
            semestre=validated_data['semestre'],
           
        )
        cla.save()
        return cla
