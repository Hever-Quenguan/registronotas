from ..models import Asistencia
from rest_framework import serializers


class AsistenciaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Asistencia
        fields = ['estudiante', 'clase', 'fecha','presente']  

    def create(self, validated_data):
        # Crear el usuario y guardar en la db
        asist = Asistencia(
            estudiante=validated_data['estudiante'],
            clase=validated_data['clase'],
            fecha=validated_data['fecha'],
            presente=validated_data['presente'],
            
           
        )
        asist.save()
        return asist
