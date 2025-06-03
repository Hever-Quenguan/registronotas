from ..models import Estudiantes
from rest_framework import serializers


class EstudiantesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Estudiantes
        fields = '__all__'

    def create(self, validated_data):
        # Crear el usuario y guardar en la db
        est = Estudiantes(
            nombre=validated_data['nombre'],
            apellido=validated_data['apellido'],
            correo=validated_data['correo'],
            direccion=validated_data['direccion'],
            telefono=validated_data['telefono'],
            tipodoc=validated_data['tipodoc'],
            numdoc=validated_data['numdoc'],
            fecna=validated_data['fecna'],
         
           
        )
        est.save()
        return est
