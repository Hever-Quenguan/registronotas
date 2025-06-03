from ..models import Clase
from rest_framework import serializers


class ClaseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Clase
        fields = '__all__'

    def create(self, validated_data):
        # Crear el usuario y guardar en la db
        cla = Clase(
            curso=validated_data['curso'],
            profesor=validated_data['profesor'],
            horario=validated_data['horario'],
            semestre=validated_data['semestre'],
           
        )
        cla.save()
        return cla
