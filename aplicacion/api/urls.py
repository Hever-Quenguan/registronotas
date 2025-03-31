from django.urls import path
from .views import DocumentoRegistrationView, CursoRegistrationView,EstudiantesRegistrationView,ProfesorRegistrationView
from .views import ClaseRegistrationView

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('register/documento/', DocumentoRegistrationView.as_view(), name='documento-register'),
    path('register/curso/', CursoRegistrationView.as_view(), name='curso-register'),
    path('register/estudiantes/', EstudiantesRegistrationView.as_view(), name='estudiante-register'),
    path('register/profesor/', ProfesorRegistrationView.as_view(), name='profesor-register'),
    path('register/clase/', ClaseRegistrationView.as_view(), name='clase-register'),

    

  
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)