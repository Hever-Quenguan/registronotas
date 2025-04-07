from ..models import Profesor
from rest_framework import serializers


class ProfesorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profesor
        fields = ['nombre', 'apellido', 'correo', 'direccion', 'telefono', 'tipodoc', 'numdoc', 'especialidad']  


    

    def create(self, validated_data):
        # Crear el usuario y guardar en la db
        prof = Profesor(
            nombre=validated_data['nombre'],
            apellido=validated_data['apellido'],
            correo=validated_data['correo'],
            direccion=validated_data['direccion'],
            telefono=validated_data['telefono'],
            tipodoc=validated_data['tipodoc'],
            numdoc=validated_data['numdoc'],
            especialidad=validated_data['especialidad'],
         
           
        )
        prof.save()
        return prof
