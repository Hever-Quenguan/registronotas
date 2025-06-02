import { Component, OnInit } from '@angular/core';
import { ProfesoresService } from 'src/app/core/services/profesores.service';
import { Profesor } from '../../../model/profesores-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-profesores',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './profesores.component.html',
})
export class ProfesoresComponent implements OnInit {
  profesores: Profesor[] = [];
  profesor: Profesor = this.resetProfesor();
  editando: boolean = false;
  profesorEditandoId: number | null = null;

  constructor(private profService: ProfesoresService) {}

  ngOnInit(): void {
    this.cargarProfesores();
  }

  cargarProfesores() {
    this.profService.getProfesores().subscribe(data => this.profesores = data);
  }

  guardarProfesor() {
    if (this.editando && this.profesorEditandoId !== null) {
      this.profService.updateProfesor(this.profesorEditandoId, this.profesor).subscribe(() => {
        this.resetFormulario();
        this.cargarProfesores();
      });
    } else {
      this.profService.addProfesor(this.profesor).subscribe(() => {
        this.resetFormulario();
        this.cargarProfesores();
      });
    }
  }

  editar(prof: Profesor) {
    this.profesor = { ...prof };
    this.editando = true;
    this.profesorEditandoId = Number(prof.id ?? prof.numdoc);
  }

  eliminar(prof: Profesor) {
    if (confirm('¿Eliminar este profesor?')) {
      const id = Number(prof.id ?? prof.numdoc);
      this.profService.deleteProfesor(id).subscribe(() => this.cargarProfesores());
    }
  }

  resetFormulario() {
    this.profesor = this.resetProfesor();
    this.editando = false;
    this.profesorEditandoId = null;
  }

  resetProfesor(): Profesor {
    return {
      nombre: '',
      apellido: '',
      correo: '',
      direccion: '',
      telefono: '',
      tipodoc: 0,
      numdoc: '',
      especialidad: ''
    };
  }
}
