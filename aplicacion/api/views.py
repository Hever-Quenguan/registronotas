from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers.documento import DocumentoSerializer
from .serializers.cursoser import CursoSerializer
from .serializers.estudianteser import EstudiantesSerializer
from .serializers.profesorser import ProfesorSerializer
from .serializers.claseser import ClaseSerializer
from .serializers.notaser import NotaSerializer
from .serializers.evaluacionser import EvaluacionSerializer
from .serializers.asistenciaser import AsistenciaSerializer

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
        serializer = EstudiantesSerializer(data=request.data)
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
        serializer = ClaseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Clase registrada exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NotaRegistrationView(APIView):
    def post(self, request):
        serializer = NotaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Nota registrada exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class EvaluacionRegistrationView(APIView):
    def post(self, request):
        serializer = EvaluacionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Evaluacion registrada exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AsistenciaRegistrationView(APIView):
    def post(self, request):
        serializer = AsistenciaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Asistencia registrada exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)