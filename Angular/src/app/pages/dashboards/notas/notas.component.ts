import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NotaService } from 'src/app/core/services/notas.service';
import { EstudiantesService } from 'src/app/core/services/estudiante.service';

import { Nota } from 'src/app/model/notas-model';
import { Estudiante } from 'src/app/model/estudiantes-model';
import { Evaluacion } from 'src/app/model/evaluacion-model';

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './notas.component.html',
})
export class NotasComponent implements OnInit {
  notas: Nota[] = [];
  nota: Nota = this.resetNota();

  estudiantes: Estudiante[] = [];
  evaluaciones: Evaluacion[] = [];

  editando = false;
  notaEditandoId: number | null = null;

  constructor(
    private notaService: NotaService,
    private estudiantesService: EstudiantesService
  ) {}

  ngOnInit(): void {
    this.cargarNotas();
    this.cargarEstudiantes();
    this.cargarEvaluaciones();
  }

  cargarNotas() {
    this.notaService.getNotas().subscribe(data => this.notas = data);
  }

  cargarEstudiantes() {
    this.estudiantesService.getEstudiantes().subscribe(data => this.estudiantes = data);
  }

  cargarEvaluaciones() {
    this.notaService.getEvaluaciones().subscribe(data => this.evaluaciones = data);
  }

  guardarNota() {
    this.nota.estudiante = Number(this.nota.estudiante);
    this.nota.evaluacion = Number(this.nota.evaluacion);

    if (this.editando && this.notaEditandoId !== null) {
      this.notaService.updateNota(this.notaEditandoId, this.nota).subscribe(() => {
        this.resetFormulario();
        this.cargarNotas();
      });
    } else {
      this.notaService.addNota(this.nota).subscribe(() => {
        this.resetFormulario();
        this.cargarNotas();
      });
    }
  }

  editar(nota: Nota) {
    this.nota = { ...nota };
    this.editando = true;
    this.notaEditandoId = nota.id ?? null;
  }

  eliminar(nota: Nota) {
    if (confirm('¿Eliminar esta nota?')) {
      this.notaService.deleteNota(nota.id!).subscribe(() => this.cargarNotas());
    }
  }

  resetFormulario() {
    this.nota = this.resetNota();
    this.editando = false;
    this.notaEditandoId = null;
  }

  resetNota(): Nota {
    return {
      estudiante: 0,
      evaluacion: 0,
      calificacion: 0,
    };
  }
}
