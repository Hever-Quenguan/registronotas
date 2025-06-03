import Keycloak from 'keycloak-js';

export class KeycloakService {
  private keycloak: InstanceType<typeof Keycloak>;

  constructor() {
    this.keycloak = new Keycloak({
      url: 'http://localhost:8080', // URL de tu servidor Keycloak
      realm: 'NotasRealm',          // Nombre del realm configurado
      clientId: 'angular_app',      // Cliente registrado en el realm
    });
  }

  /**
   * Inicializa la sesión de Keycloak
   */
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

  /**
   * Obtiene el token de acceso
   */
  getToken(): string {
    return this.keycloak.token!;
  }

  /**
   * Cierra la sesión de Keycloak
   */
  logout(): void {
    localStorage.removeItem('Rol');
    this.keycloak.logout({
      redirectUri: window.location.origin, // Redirige al home tras logout
    });
  }

  /**
   * Retorna el nombre de usuario
   */
  getUsername(): string {
    return this.keycloak.tokenParsed?.preferred_username || '';
  }

  /**
   * Retorna el email del usuario (si está disponible)
   */
  getEmail(): string {
    return this.keycloak.tokenParsed?.email || '';
  }

  /**
   * Retorna los roles globales (realm roles)
   */
  getRoles(): string[] {
    return this.keycloak.tokenParsed?.realm_access?.roles || [];
  }

  /**
   * Retorna el primer rol válido entre los definidos
   */
  getUserRole(): string | null {
    const roles = this.keycloak.tokenParsed?.realm_access?.roles || [];
    const rolesValidos = ['admin', 'Profesor', 'Estudiante'];
    const rolEncontrado = roles.find(r => rolesValidos.includes(r));
    return rolEncontrado || null;
  }

  /**
   * Verifica si el usuario tiene un rol específico
   */
  hasRole(role: string): boolean {
    return this.getRoles().includes(role);
  }

  /**
   * Verifica si el usuario está autenticado
   */
  isLoggedIn(): boolean {
    return !!this.keycloak.token;
  }

  /**
   * Actualiza el token antes de que expire
   */
  updateToken(): Promise<boolean> {
    return this.keycloak.updateToken(70);
  }

  /**
   * Retorna la instancia de Keycloak
   */
  get instance(): InstanceType<typeof Keycloak> {
    return this.keycloak;
  }
}
