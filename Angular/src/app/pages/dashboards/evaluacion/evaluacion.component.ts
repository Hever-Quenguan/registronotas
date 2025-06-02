import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EvaluacionesService } from 'src/app/core/services/evaluacion.service';
import { Evaluacion } from '../../../model/evaluacion-model';
import { Clase } from '../../../model/clases-model';

@Component({
  selector: 'app-evaluaciones',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './evaluacion.component.html',
})
export class EvaluacionesComponent implements OnInit {
  evaluaciones: Evaluacion[] = [];
  evaluacion: Evaluacion = this.resetEvaluacion();
  clases: Clase[] = [];
  editando: boolean = false;
  evaluacionEditandoId: number | null = null;

  constructor(private evaluacionService: EvaluacionesService) {}

  ngOnInit(): void {
    this.cargarEvaluaciones();
    this.cargarClases();
  }

  cargarEvaluaciones() {
    this.evaluacionService.getEvaluaciones().subscribe(data => this.evaluaciones = data);
  }

  cargarClases() {
    this.evaluacionService.getClases().subscribe(data => this.clases = data);
  }

  guardarEvaluacion() {
    this.evaluacion.clase = Number(this.evaluacion.clase);

    if (this.editando && this.evaluacionEditandoId !== null) {
      this.evaluacionService.updateEvaluacion(this.evaluacionEditandoId, this.evaluacion).subscribe(() => {
        this.resetFormulario();
        this.cargarEvaluaciones();
      });
    } else {
      this.evaluacionService.addEvaluacion(this.evaluacion).subscribe(() => {
        this.resetFormulario();
        this.cargarEvaluaciones();
      });
    }
  }

  editar(evaluacion: Evaluacion) {
    this.evaluacion = { ...evaluacion };
    this.editando = true;
    this.evaluacionEditandoId = evaluacion.id ?? null;
  }

  eliminar(evaluacion: Evaluacion) {
    if (confirm('¿Eliminar esta evaluación?')) {
      this.evaluacionService.deleteEvaluacion(evaluacion.id!).subscribe(() => this.cargarEvaluaciones());
    }
  }

  resetFormulario() {
    this.evaluacion = this.resetEvaluacion();
    this.editando = false;
    this.evaluacionEditandoId = null;
  }

  resetEvaluacion(): Evaluacion {
    return {
      clase: 0,
      titulo: '',
      descripcion: '',
      fecha: new Date().toISOString().split('T')[0],  // fecha de hoy
      ponderacion: 0
    };
  }
}
