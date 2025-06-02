import { Component, OnInit } from '@angular/core';
import { EstudiantesService, Estudiante } from 'src/app/core/services/estudiante.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './estudiantes.component.html',
})

export class EstudiantesComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  estudiante: Estudiante = this.resetEstudiante();
  editando: boolean = false;
  estudianteEditandoId: number | null = null;

  constructor(private estService: EstudiantesService) {}

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes() {
    this.estService.getEstudiantes().subscribe(data => this.estudiantes = data);
  }

  guardarEstudiante() {
    if (this.editando && this.estudianteEditandoId !== null) {
      this.estService.updateEstudiante(this.estudianteEditandoId, this.estudiante).subscribe(() => {
        this.resetFormulario();
        this.cargarEstudiantes();
      });
    } else {
      this.estService.addEstudiante(this.estudiante).subscribe(() => {
        this.resetFormulario();
        this.cargarEstudiantes();
      });
    }
  }

  editar(est: Estudiante) {
  this.estudiante = { ...est };
  this.editando = true;
  this.estudianteEditandoId = Number(est.id ?? est.numdoc);
}


  eliminar(est: Estudiante) {
  if (confirm('¿Eliminar este estudiante?')) {
    const id = Number(est.id ?? est.numdoc);
    this.estService.deleteEstudiante(id).subscribe(() => this.cargarEstudiantes());
  }
}

  resetFormulario() {
    this.estudiante = this.resetEstudiante();
    this.editando = false;
    this.estudianteEditandoId = null;
  }

  resetEstudiante(): Estudiante {
    return {
      nombre: '',
      apellido: '',
      correo: '',
      direccion: '',
      telefono: '',
      tipodoc: '',
      numdoc: '',
      fecna: ''
    };
  }
}
