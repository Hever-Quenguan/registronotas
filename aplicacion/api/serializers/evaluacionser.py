from ..models import Evaluacion
from rest_framework import serializers


class EvaluacionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Evaluacion
        fields = '__all__'

    def create(self, validated_data):
        # Crear el usuario y guardar en la db
        eval = Evaluacion(
            clase=validated_data['clase'],
            titulo=validated_data['titulo'],
            descripcion=validated_data['descripcion'],
            fecha=validated_data['fecha'],
            ponderacion=validated_data['ponderacion'],
            


        
           
        )
        eval.save()
        return eval
