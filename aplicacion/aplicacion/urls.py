from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

urlpatterns = [
    # Admin de Django
    path('admin/', admin.site.urls),

    # Endpoints de tu API
    path('api/', include('api.urls')),

    # Esquema OpenAPI generado por drf-spectacular
    path('schema/', SpectacularAPIView.as_view(), name='schema'),

    # Vista Swagger con el botón Authorize (usa el esquema anterior)
    path('swagger/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),

    # Endpoints para autenticación OAuth2
    path('o/', include('oauth2_provider.urls', namespace='oauth2_provider')),

    path('accounts/', include('allauth.urls')),

     
]
