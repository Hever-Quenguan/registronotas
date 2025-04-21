from django.urls import path
from .views import DocumentoRegistrationView, CursoRegistrationView, EstudiantesRegistrationView, ProfesorRegistrationView
from .views import ClaseRegistrationView, EvaluacionRegistrationView, NotaRegistrationView, AsistenciaRegistrationView

from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from aplicacion.views import vista_protegida

urlpatterns = [
    path('register/documento/', DocumentoRegistrationView.as_view(), name='documento-register'),
    path('documento/', DocumentoRegistrationView.as_view(), name='documento-list'),
    
    path('register/curso/', CursoRegistrationView.as_view(), name='curso-register'),
    path('curso/', CursoRegistrationView.as_view(), name='curso-list'),
    
    path('register/estudiantes/', EstudiantesRegistrationView.as_view(), name='estudiante-register'),
    path('estudiantes/', EstudiantesRegistrationView.as_view(), name='estudiante-list'),
    
    path('register/profesor/', ProfesorRegistrationView.as_view(), name='profesor-register'),
    path('profesor/', ProfesorRegistrationView.as_view(), name='profesor-list'),
    
    path('register/clase/', ClaseRegistrationView.as_view(), name='clase-register'),
    path('clase/', ClaseRegistrationView.as_view(), name='clase-list'),
    
    path('register/evaluacion/', EvaluacionRegistrationView.as_view(), name='evaluacion-register'),
    path('evaluacion/', EvaluacionRegistrationView.as_view(), name='evaluacion-list'),
    
    path('register/nota/', NotaRegistrationView.as_view(), name='nota-register'),
    path('nota/', NotaRegistrationView.as_view(), name='nota-list'),
    
    path('register/asistencia/', AsistenciaRegistrationView.as_view(), name='asistencia-register'),
    path('asistencia/', AsistenciaRegistrationView.as_view(), name='asistencia-list'),

    path('protegida/', vista_protegida),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
