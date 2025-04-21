import json
import requests
from jose import jwt
from django.http import JsonResponse
from django.conf import settings

KEYCLOAK_REALM = "reino-1"
KEYCLOAK_URL = "http://localhost:8080"  # el hostname del contenedor dentro de docker
KEYCLOAK_CLIENT_ID = "48fdf48f-7729-48b2-b62c-104fc491ad43"

def get_public_key():
    certs_url = f"{KEYCLOAK_URL}/realms/{KEYCLOAK_REALM}/protocol/openid-connect/certs"
    response = requests.get(certs_url)
    jwks = response.json()
    return jwks

class KeycloakMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        self.jwks = get_public_key()

    def __call__(self, request):
        auth = request.META.get("HTTP_AUTHORIZATION", "")
        if auth.startswith("Bearer "):
            token = auth.split(" ")[1]
            try:
                claims = jwt.decode(token, self.jwks, algorithms=["RS256"], options={"verify_aud": False})
                request.keycloak_user = claims
            except Exception as e:
                return JsonResponse({"detail": "Token inválido", "error": str(e)}, status=401)
        else:
            request.keycloak_user = None
        return self.get_response(request)
