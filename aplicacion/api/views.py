from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers.documento import DocumentoSerializer
from .serializers.cursoser import CursoSerializer
from .serializers.estudianteser import EstudiantesSerializer
from .serializers.profesorser import ProfesorSerializer
from .serializers.claseser import ClaseSerializer

class DocumentoRegistrationView(APIView):
    def post(self, request):
        serializer = DocumentoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Tipo de Documento registrado exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CursoRegistrationView(APIView):
    def post(self, request):
        serializer = CursoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Curso registrado exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EstudiantesRegistrationView(APIView):
    def post(self, request):
        serializer = EstudianteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Estudiante registrado exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProfesorRegistrationView(APIView):
    def post(self, request):
        serializer = ProfesorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Profesor registrado exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ClaseRegistrationView(APIView):
    def post(self, request):
        serializer = CLaseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Clase registrada exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)