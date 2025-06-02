import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from 'src/app/core/services/token.service';
import { inject } from '@angular/core';
 
@Component({
    selector: 'app-passwordreset',
    standalone: true,
    templateUrl: './passwordreset.component.html',
    styleUrls: ['./passwordreset.component.scss'],
    imports: [ReactiveFormsModule, CommonModule]
})
export class PasswordresetComponent implements OnInit {
    passwordForm: FormGroup;
    errorMessage: string = '';
    successMessage: string = '';
    UserName: string = '';
    PerfilId: number = 0;
    mostrarFormulario: boolean = false;
 
    private readonly tokenService = inject(TokenService);
 
    constructor(
        private fb: FormBuilder,
        private authService: AuthenticationService,
        private router: Router,
        private http: HttpClient,
       
    ) {
        this.passwordForm = this.fb.group(
            {
                currentPassword: ['', Validators.required],
                newPassword: [
                    '',
                    [
                        Validators.required,
                        Validators.minLength(8),
                        Validators.pattern(
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).*$/
                        )
                    ]
                ],
                confirmPassword: ['', Validators.required],
                email: ['', [Validators.required, Validators.email]] // Agrega el control de correo electrónico
            },
            { validators: this.checkPassword }
        );
    }
 
    ngOnInit(): void {
        const user = this.authService.currentUserValue;
        if (user) {
            this.UserName = user.login;
            this.PerfilId = user.perfilId;
            if (user.estadoClave === 1) {
                this.mostrarFormulario = true;
            } else {
                this.router.navigate(['/login']);
            }
        }
        this.obtenerToken();
        this.changePassword();
    }
 
    checkPassword(group: FormGroup) {
        let pass = group.get('newPassword')?.value;
        let confirmPass = group.get('confirmPassword')?.value;
        return pass === confirmPass ? null : { notSame: true };
    }
 
    changePassword() {
        if (this.passwordForm.valid) {
            const newPassword = this.passwordForm.value.newPassword;
            const confirmPassword = this.passwordForm.value.confirmPassword;
            const email = this.passwordForm.value.email; // Obtiene el correo electrónico del formulario
 
            const token = sessionStorage.getItem('token');
            console.log('Token obtenido:', token);
 
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                })
            };
 
            this.http
                .post(
                    'https://localhost:7042/api/BackOffice/CambioPassword',
                    {
                        UserName: email, // Usa el correo electrónico del formulario
                        CurrentPassword: this.passwordForm.value.currentPassword,
                        NewPassword: newPassword,
                        ConfirmNewpassword: confirmPassword,
                        PerfilId: this.PerfilId
                    },
                    httpOptions
                )
                .subscribe({
                    next: (response) => {
                        this.successMessage = 'Contraseña cambiada exitosamente.';
                        this.errorMessage = '';
                        this.router.navigate(['/login']);
                    },
                    error: (error) => {
                        console.error('Error al cambiar la contraseña:', error);
                        this.errorMessage =
                            'Error al cambiar la contraseña. Por favor, inténtalo de nuevo.';
                        this.successMessage = '';
                    }
                });
        } else {
            this.errorMessage = 'Por favor, completa el formulario correctamente.';
            this.successMessage = '';
        }
    }
 
    obtenerToken() {
        this.tokenService.getToken();
    }
}