import { bootstrapApplication } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';

import { provideHttpClient } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { JwtInterceptor } from './app/core/helpers/jwt.interceptor';
import { ErrorInterceptor } from './app/core/helpers/error.interceptor';
import { TokenInterceptor } from './app/core/interceptors/token.interceptor';

import { KeycloakService } from './app/core/services/keycloak.service';

if (environment.production) {
  enableProdMode();
}

// Instancia manual del servicio de autenticación
const keycloakService = new KeycloakService();

// Inicializar Keycloak antes del arranque de la app
keycloakService.init().then(() => {
  // Configurar refresco automático del token cada 60 segundos
  setInterval(() => {
    keycloakService.updateToken().catch(() => {
      console.warn('No se pudo actualizar el token');
    });
  }, 60000);

  // Bootstrap de la app
  bootstrapApplication(AppComponent, {
    providers: [
      provideHttpClient(),
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      { provide: KeycloakService, useValue: keycloakService },
      ...appConfig.providers
    ]
  });
}).catch(err => {
  console.error('Error inicializando Keycloak:', err);
});
