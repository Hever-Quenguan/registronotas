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
from .models import TipoDocumento, Curso, Estudiantes, Profesor, Clase, Nota, Evaluacion, Asistencia
from drf_spectacular.utils import extend_schema
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def test_protected_view(request):
    """
    Vista protegida que solo es accesible para usuarios autenticados.
    Devuelve un mensaje con el usuario autenticado.
    """
    return Response({'message': 'Acceso concedido', 'user': str(request.user)})


# Documento
@extend_schema(tags=['DOcumento'])
class DocumentoRegistrationView(APIView):

    serializer_class = DocumentoSerializer
    
    def post(self, request):
        serializer = DocumentoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Tipo de Documento registrado exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        documentos = TipoDocumento.objects.all()
        serializer = DocumentoSerializer(documentos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            documento = TipoDocumento.objects.get(pk=pk)
        except TipoDocumento.DoesNotExist:
            return Response({"message": "Documento no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = DocumentoSerializer(documento, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Documento actualizado exitosamente"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            documento = TipoDocumento.objects.get(pk=pk)
        except TipoDocumento.DoesNotExist:
            return Response({"message": "Documento no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        
        documento.delete()
        return Response({"message": "Documento eliminado exitosamente"}, status=status.HTTP_204_NO_CONTENT)

@extend_schema(tags=['DOcumento'])
class DocumentoDetailView(APIView):

    serializer_class = DocumentoSerializer
    def get(self, request, pk):
        try:
            documento = TipoDocumento.objects.get(pk=pk)
        except TipoDocumento.DoesNotExist:
            return Response({"message": "Documento no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        serializer = DocumentoSerializer(documento)
        return Response(serializer.data, status=status.HTTP_200_OK)

# Curso
@extend_schema(tags=['Curso'])
class CursoRegistrationView(APIView):

    serializer_class = CursoSerializer

    def post(self, request):
        serializer = CursoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Curso registrado exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        cursos = Curso.objects.all()
        serializer = CursoSerializer(cursos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            curso = Curso.objects.get(pk=pk)
        except Curso.DoesNotExist:
            return Response({"message": "Curso no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        serializer = CursoSerializer(curso, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Curso actualizado exitosamente"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            curso = Curso.objects.get(pk=pk)
        except Curso.DoesNotExist:
            return Response({"message": "Curso no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        curso.delete()
        return Response({"message": "Curso eliminado exitosamente"}, status=status.HTTP_204_NO_CONTENT)

@extend_schema(tags=['Curso'])
class CursoDetailView(APIView):

    serializer_class = CursoSerializer

    def get(self, request, pk):
        try:
            curso = Curso.objects.get(pk=pk)
        except Curso.DoesNotExist:
            return Response({"message": "Curso no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        serializer = CursoSerializer(curso)
        return Response(serializer.data, status=status.HTTP_200_OK)
        

# Estudiantes
@extend_schema(tags=['Estudiante'])
class EstudiantesRegistrationView(APIView):

    serializer_class = EstudiantesSerializer
    
    def post(self, request):
        serializer = EstudiantesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Estudiante registrado exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        estudiantes = Estudiantes.objects.all()
        serializer = EstudiantesSerializer(estudiantes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, pk):
        try:
            estudiante = Estudiantes.objects.get(pk=pk)
        except Estudiantes.DoesNotExist:
            return Response({"message": "Estudiante no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        serializer = EstudiantesSerializer(estudiante, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Estudiante actualizado exitosamente"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            estudiante = Estudiantes.objects.get(pk=pk)
        except Estudiantes.DoesNotExist:
            return Response({"message": "Estudiante no  encontrado"}, status=status.HTTP_404_NOT_FOUND)

        estudiante.delete()
        return Response({"message": "Estudiante eliminado exitosamente"}, status=status.HTTP_204_NO_CONTENT)

@extend_schema(tags=['Estudiante'])
class EstudiantesDetailView(APIView):

    serializer_class = EstudiantesSerializer

    def get(self, request, pk):
        try:
            estudiante = Estudiantes.objects.get(pk=pk)
        except Estudiantes.DoesNotExist:
            return Response({"message": "Estudiante no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        serializer = EstudiantesSerializer(estudiante)
        return Response(serializer.data, status=status.HTTP_200_OK)

# Profesor
@extend_schema(tags=['Profesor'])
class ProfesorRegistrationView(APIView):

    serializer_class = ProfesorSerializer
    
    def post(self, request):
        serializer = ProfesorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Profesor registrado exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        profesores = Profesor.objects.all()
        serializer = ProfesorSerializer(profesores, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            profesor = Profesor.objects.get(pk=pk)
        except Profesor.DoesNotExist:
            return Response({"message": "Profesor no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        serializer = ProfesorSerializer(profesor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Profesor actualizado exitosamente"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            profesor = Profesor.objects.get(pk=pk)
        except Profesor.DoesNotExist:
            return Response({"message": "Profesor no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        profesor.delete()
        return Response({"message": "Profesor eliminado exitosamente"}, status=status.HTTP_204_NO_CONTENT)

@extend_schema(tags=['Profesor'])
class ProfesorDetailView(APIView):

    serializer_class = ProfesorSerializer

    def get(self, request, pk):
        try:
            profesor = Profesor.objects.get(pk=pk)
        except Profesor.DoesNotExist:
            return Response({"message": "Profesor no encontrado"}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProfesorSerializer(profesor)
        return Response(serializer.data, status=status.HTTP_200_OK)

# Clase
@extend_schema(tags=['Clase'])
class ClaseRegistrationView(APIView):

    serializer_class = ClaseSerializer
    
    def post(self, request):
        serializer = ClaseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Clase registrada exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        clases = Clase.objects.all()
        serializer = ClaseSerializer(clases, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            clase = Clase.objects.get(pk=pk)
        except Clase.DoesNotExist:
            return Response({"message": "Clase no encontrada"}, status=status.HTTP_404_NOT_FOUND)

        serializer = ClaseSerializer(clase, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Clase actualizada exitosamente"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            clase = Clase.objects.get(pk=pk)
        except Clase.DoesNotExist:
            return Response({"message": "Clase no encontrada"}, status=status.HTTP_404_NOT_FOUND)

        clase.delete()
        return Response({"message": "Clase eliminada exitosamente"}, status=status.HTTP_204_NO_CONTENT)

@extend_schema(tags=['Clase'])
class ClaseDetailView(APIView):

    serializer_class = ClaseSerializer

    def get(self, request, pk):
        try:
            clase = Clase.objects.get(pk=pk)
        except Clase.DoesNotExist:
            return Response({"message": "Clase no encontrada"}, status=status.HTTP_404_NOT_FOUND)
        serializer = ClaseSerializer(clase)
        return Response(serializer.data, status=status.HTTP_200_OK)

# Nota
@extend_schema(tags=['Nota'])
class NotaRegistrationView(APIView):

    serializer_class = NotaSerializer
    
    def post(self, request):
        serializer = NotaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Nota registrada exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        notas = Nota.objects.all()
        serializer = NotaSerializer(notas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            nota = Nota.objects.get(pk=pk)
        except Nota.DoesNotExist:
            return Response({"message": "Nota no encontrada"}, status=status.HTTP_404_NOT_FOUND)

        serializer = NotaSerializer(nota, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Nota actualizada exitosamente"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            nota = Nota.objects.get(pk=pk)
        except Nota.DoesNotExist:
            return Response({"message": "Nota no encontrada"}, status=status.HTTP_404_NOT_FOUND)

        nota.delete()
        return Response({"message": "Nota eliminada exitosamente"}, status=status.HTTP_204_NO_CONTENT)

@extend_schema(tags=['Nota'])
class NotaDetailView(APIView):

    serializer_class = NotaSerializer

    def get(self, request, pk):
        try:
            nota = Nota.objects.get(pk=pk)
        except Nota.DoesNotExist:
            return Response({"message": "Nota no encontrada"}, status=status.HTTP_404_NOT_FOUND)
        serializer = NotaSerializer(nota)
        return Response(serializer.data, status=status.HTTP_200_OK)

    




# Evaluacion
@extend_schema(tags=['Evaluacion'])
class EvaluacionRegistrationView(APIView):

    serializer_class = EvaluacionSerializer
    
    def post(self, request):
        serializer = EvaluacionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Evaluacion registrada exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        evaluaciones = Evaluacion.objects.all()
        serializer = EvaluacionSerializer(evaluaciones, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def put(self, request, pk):
        try:
            evaluacion = Evaluacion.objects.get(pk=pk)
        except Evaluacion.DoesNotExist:
            return Response({"message": "Evaluación no encontrada"}, status=status.HTTP_404_NOT_FOUND)

        serializer = EvaluacionSerializer(evaluacion, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Evaluación actualizada exitosamente"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            evaluacion = Evaluacion.objects.get(pk=pk)
        except Evaluacion.DoesNotExist:
            return Response({"message": "Evaluación no encontrada"}, status=status.HTTP_404_NOT_FOUND)

        evaluacion.delete()
        return Response({"message": "Evaluación eliminada exitosamente"}, status=status.HTTP_204_NO_CONTENT)

@extend_schema(tags=['Evaluacion'])
class EvaluacionDetailView(APIView):

    serializer_class = EvaluacionSerializer

    def get(self, request, pk):
        try:
            evaluacion = Evaluacion.objects.get(pk=pk)
        except Evaluacion.DoesNotExist:
            return Response({"message": "Evaluación no encontrada"}, status=status.HTTP_404_NOT_FOUND)
        serializer = EvaluacionSerializer(evaluacion)
        return Response(serializer.data, status=status.HTTP_200_OK)

# Asistencia
@extend_schema(tags=['Asistencia'])
class AsistenciaRegistrationView(APIView):

    serializer_class = AsistenciaSerializer
    
    def post(self, request):
        serializer = AsistenciaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Asistencia registrada exitosamente"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        asistencias = Asistencia.objects.all()
        serializer = AsistenciaSerializer(asistencias, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            asistencia = Asistencia.objects.get(pk=pk)
        except Asistencia.DoesNotExist:
            return Response({"message": "Asistencia no encontrada"}, status=status.HTTP_404_NOT_FOUND)

        serializer = AsistenciaSerializer(asistencia, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Asistencia actualizada exitosamente"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        try:
            asistencia = Asistencia.objects.get(pk=pk)
        except Asistencia.DoesNotExist:
            return Response({"message": "Asistencia no encontrada"}, status=status.HTTP_404_NOT_FOUND)

        asistencia.delete()
        return Response({"message": "Asistencia eliminada exitosamente"}, status=status.HTTP_204_NO_CONTENT)

@extend_schema(tags=['Asistencia'])
class AsistenciaDetailView(APIView):

    serializer_class = AsistenciaSerializer
    
    def get(self, request, pk):
        try:
            asistencia = Asistencia.objects.get(pk=pk)
        except Asistencia.DoesNotExist:
            return Response({"message": "Asistencia no encontrada"}, status=status.HTTP_404_NOT_FOUND)
        serializer = AsistenciaSerializer(asistencia)
        return Response(serializer.data, status=status.HTTP_200_OK)
