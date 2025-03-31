from django.urls import path
from .views import DocumentoRegistrationView, CursoRegistrationView

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('register/documento/', DocumentoRegistrationView.as_view(), name='documento-register'),
    path('register/curso/', CursoRegistrationView.as_view(), name='curso-register'),
  
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)