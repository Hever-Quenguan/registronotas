import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TokenService } from 'src/app/core/services/token.service';
import { Store } from '@ngrx/store';
import { login } from 'src/app/store/Authentication/authentication.actions';
import { catchError, throwError } from 'rxjs';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class LoginComponent implements OnInit {
  
  loginForm: UntypedFormGroup;
  submitted = false;
  error: string = '';
  fieldTextType: boolean = false;
  loading: boolean = false; // ✅ Agregamos control de carga
  year: number = new Date().getFullYear();
  
  private readonly tokenService = inject(TokenService);
  private readonly notifyService = inject(NotificationService);

  constructor(
    private readonly formBuilder: UntypedFormBuilder,
    private readonly router: Router,
    private readonly authenticationService: AuthenticationService,
    private readonly store: Store
  ) {
    this.checkAndRedirectIfAuthenticated();
  }

  private checkAndRedirectIfAuthenticated(): void {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/']);
    }
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });

    this.obtenerToken();
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.notifyService.showWarning("Por favor, complete los campos requeridos.", "Formulario incompleto");
      return;
    }

    this.loading = true; // ✅ loading antes llamar api

    const email = this.f['email'].value;
    const password = this.f['password'].value;

    this.authenticationService.login(email, password)
      .pipe(
        catchError(error => {
          console.error('Error de inicio de sesión:', error);
          this.notifyService.showError("Error al iniciar sesión. Verifica tus credenciales.", "Error");
          this.loading = false; // condicion de error
          return throwError(() => error);
        })
      )
      .subscribe({
        next: (data: any) => {
          if (data.success) {
            sessionStorage.setItem('toast', 'true');
            sessionStorage.setItem('currentUser', JSON.stringify(data.data));
            sessionStorage.setItem('token', data.token);
            this.store.dispatch(login({ email, password }));
            this.notifyService.showSuccess("Inicio de sesión exitoso", "Bienvenido");
            this.router.navigate(['/']);
          } else {
            console.log(data);
            this.notifyService.showError("Usuario o contraseña incorrectos", "Error");
          }
          this.loading = false; //desactivamos error
        },
        error: () => this.loading = false 
      });
  }

  forgotPassword() {
    this.router.navigate(['/auth/reset-password']);
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  obtenerToken() {
    this.tokenService.getToken();
  }
}
