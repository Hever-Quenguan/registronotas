from django.urls import path
from .views import DocumentoRegistrationView, DocumentoDetailView, CursoRegistrationView, CursoDetailView
from .views import EstudiantesRegistrationView, EstudiantesDetailView, ProfesorRegistrationView, ProfesorDetailView
from .views import ClaseRegistrationView, ClaseDetailView, EvaluacionRegistrationView, EvaluacionDetailView
from .views import NotaRegistrationView, NotaDetailView, AsistenciaRegistrationView, AsistenciaDetailView
from .views import ProfesorMeView
from .views import EstudianteMeView

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # Documento
    path('register/documento/', DocumentoRegistrationView.as_view(), name='documento-register'),
    path('documento/<int:pk>/', DocumentoDetailView.as_view(), name='documento-detail'),  # Ruta de detalle

    # Curso
    path('register/curso/', CursoRegistrationView.as_view(), name='curso-register'),
    path('curso/<int:pk>/', CursoDetailView.as_view(), name='curso-detail'),  # Ruta de detalle

    # Estudiantes
    path('register/estudiantes/', EstudiantesRegistrationView.as_view(), name='estudiante-register'),
    path('estudiantes/<int:pk>/', EstudiantesDetailView.as_view(), name='estudiante-detail'),  # Ruta de detalle

    # Profesor
    path('register/profesor/', ProfesorRegistrationView.as_view(), name='profesor-register'),
    path('profesor/<int:pk>/', ProfesorDetailView.as_view(), name='profesor-detail'),  # Ruta de detalle

    # Clase
    path('register/clase/', ClaseRegistrationView.as_view(), name='clase-register'),
    path('clase/<int:pk>/', ClaseDetailView.as_view(), name='clase-detail'),  # Ruta de detalle

    # Evaluacion
    path('register/evaluacion/', EvaluacionRegistrationView.as_view(), name='evaluacion-register'),
    path('evaluacion/<int:pk>/', EvaluacionDetailView.as_view(), name='evaluacion-detail'),  # Ruta de detalle

    # Nota
    path('register/nota/', NotaRegistrationView.as_view(), name='nota-register'),
    path('nota/<int:pk>/', NotaDetailView.as_view(), name='nota-detail'),  # Ruta de detalle

    # Asistencia
    path('register/asistencia/', AsistenciaRegistrationView.as_view(), name='asistencia-register'),
    path('asistencia/<int:pk>/', AsistenciaDetailView.as_view(), name='asistencia-detail'),  # Ruta de detalle

    #PROFESORME
    path('profesor/me/', ProfesorMeView.as_view(), name='profesor-me'),

    path('estudiante/me/', EstudianteMeView.as_view(), name='estudiante-me'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
