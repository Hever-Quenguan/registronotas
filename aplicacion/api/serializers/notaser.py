from ..models import Nota
from rest_framework import serializers


class NotaSerializer(serializers.ModelSerializer):

    class Meta:
        model = Nota
        fields = ['estudiante', 'evaluacion', 'calificacion']  

    def create(self, validated_data):
        # Crear el usuario y guardar en la db
        nots = Nota(
            estudiante=validated_data['estudiante'],
            evaluacion=validated_data['evaluacion'],
            calificacion=validated_data['calificacion'],

        )
        nots.save()
        return nots
