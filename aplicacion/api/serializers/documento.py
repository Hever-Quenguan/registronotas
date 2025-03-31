from ..models import TipoDocumento
from rest_framework import serializers


class DocumentoSerializer(serializers.ModelSerializer):

    class Meta:
        model = TipoDocumento
        fields = ['descrip']  

    def create(self, validated_data):
        # Crear el usuario y guardar en la db
        docu = TipoDocumento(
            descrip=validated_data['descrip']
        )
        docu.save()
        return docu