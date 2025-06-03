import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EvaluacionesService } from 'src/app/core/services/evaluacion.service';
import { ProfesoresService } from 'src/app/core/services/profesores.service';
import { CursosService } from 'src/app/core/services/cursos.service';  // <-- Importa servicio cursos

import { Evaluacion } from '../../../model/evaluacion-model';
import { Clase } from '../../../model/clases-model';
import { Profesor } from '../../../model/profesores-model';
import { Curso } from '../../../model/curso-model';  // <-- Modelo Curso

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
  profesores: Profesor[] = [];
  cursos: Curso[] = [];

  profesoresMap = new Map<number, string>(); // idProfesor -> correoProfesor
  cursosMap = new Map<number, { nombre: string; descripcion: string }>();  // idCurso -> {nombre, descripcion}

  editando: boolean = false;
  evaluacionEditandoId: number | null = null;

  constructor(
    private evaluacionService: EvaluacionesService,
    private profesoresService: ProfesoresService,
    private cursosService: CursosService  // <-- Inyecta servicio cursos
  ) {}

  ngOnInit(): void {
    this.cargarProfesoresYClases();
    this.cargarEvaluaciones();
    this.cargarCursos();  // <-- Carga cursos
  }

  cargarProfesoresYClases() {
    this.profesoresService.getProfesores().subscribe(profesoresData => {
      this.profesores = profesoresData;

      this.profesores.forEach(prof => {
        if (prof.id !== undefined) {
          this.profesoresMap.set(prof.id, prof.correo);
        }
      });

      this.evaluacionService.getClases().subscribe(clasesData => {
        const emailLocal = localStorage.getItem('email');
        if (!emailLocal) {
          this.clases = [];
          return;
        }

        this.clases = clasesData.filter(clase => {
          const correoProfesor = this.profesoresMap.get(clase.profesor);
          return correoProfesor === emailLocal;
        });
      });
    });
  }

  cargarEvaluaciones() {
    this.evaluacionService.getEvaluaciones().subscribe(data => this.evaluaciones = data);
  }

  cargarCursos() {
    this.cursosService.getCursos().subscribe(cursosData => {
      this.cursos = cursosData;
      this.cursos.forEach(curso => {
        this.cursosMap.set(curso.id!, {
          nombre: curso.nombre,
          descripcion: curso.descripcion
        });
      });
    });
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

  // Método auxiliar para obtener datos del curso de una evaluación (por id de clase)
  getCursoInfoPorClase(evaluacion: Evaluacion): { nombre: string; descripcion: string } | null {
    const clase = this.clases.find(c => c.id === evaluacion.clase);
    if (!clase) return null;

    const cursoInfo = this.cursosMap.get(clase.curso);
    return cursoInfo || null;
  }
}
