from ..models import Curso
from rest_framework import serializers


class CursoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Curso
        fields = '__all__' 

    def create(self, validated_data):
        # Crear el usuario y guardar en la db
        cur = Curso(
            nombre=validated_data['nombre'],
            descripcion=validated_data['descripcion'],
           
        )
        cur.save()
        return cur
