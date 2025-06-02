import Keycloak from 'keycloak-js';

export class KeycloakService {
  private keycloak: InstanceType<typeof Keycloak>;

  constructor() {
    this.keycloak = new Keycloak({
        url: 'http://localhost:8080',
        realm: 'NotasRealm',
        clientId: 'angular_app', 
    });
  }

  init(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.keycloak
        .init({
          onLoad: 'login-required',
          checkLoginIframe: false,
        })
        .then((authenticated) => {
          if (authenticated) {
            resolve();
          } else {
            reject('Not authenticated');
          }
        })
        .catch(reject);
    });
  }

  getToken(): string {
    return this.keycloak.token!;
  }

  logout(): void {
    this.keycloak.logout();
  }

  getUsername(): string {
    return this.keycloak.tokenParsed?.preferred_username || '';
  }

  isLoggedIn(): boolean {
    return !!this.keycloak.token;
  }

  updateToken(): Promise<boolean> {
    return this.keycloak.updateToken(70);
  }

  get instance(): InstanceType<typeof Keycloak> {
    return this.keycloak;
  }
}
