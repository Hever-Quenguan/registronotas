import jwt
from jwt import PyJWKClient
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.models import User
from django.conf import settings
from drf_spectacular.extensions import OpenApiAuthenticationExtension


class KeycloakJWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.headers.get('Authorization')

        if not auth_header or not auth_header.startswith('Bearer'):
            return None

        token = auth_header.split(' ')[1]

        try:
            realm = settings.KEYCLOAK_REALM  # ⚠ Cambia si tu realm es diferente
            keycloak_url = f"http://keycloak:8080/realms/{realm}/protocol/openid-connect/certs"
            jwk_client = PyJWKClient(keycloak_url)
            signing_key = jwk_client.get_signing_key_from_jwt(token)

            decoded = jwt.decode(
                token,
                signing_key.key,
                algorithms=["RS256"],
                audience="django_api",  # ⚠ Este debe ser el "client_id" del cliente en Keycloak
            )
            username = decoded.get("preferred_username")
            if not username:
                raise AuthenticationFailed("No se encontró 'preferred_username' en el token.")

            user, _ = User.objects.get_or_create(username=username)
            return (user, token)

        except Exception as e:
            raise AuthenticationFailed(f"Token inválido: {str(e)}")

# aplicacion/extensions.py


class KeycloakJWTAuthenticationScheme(OpenApiAuthenticationExtension):
    target_class = 'aplicacion.authentication.KeycloakJWTAuthentication'  # Ruta completa a tu clase
    name = 'keycloakAuth'  # Nombre que aparecerá en Swagger

    def get_security_definition(self, auto_schema):
        return {
            'type': 'http',
            'scheme': 'bearer',
            'bearerFormat': 'JWT',
        }

