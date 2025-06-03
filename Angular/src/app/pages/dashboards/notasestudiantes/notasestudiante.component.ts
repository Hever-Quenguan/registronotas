import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NotaService } from 'src/app/core/services/notas.service';
import { EstudiantesService } from 'src/app/core/services/estudiante.service';

import { Nota } from 'src/app/model/notas-model';
import { Estudiante } from 'src/app/model/estudiantes-model';
import { Evaluacion } from 'src/app/model/evaluacion-model';
import { Clase } from 'src/app/model/clases-model';
import { Curso } from 'src/app/model/curso-model';
import { Profesor } from 'src/app/model/profesores-model';


interface EstudianteInfo {
  nombreCompleto: string;
  correo: string;
}

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './notasestudiante.component.html',
})
export class NotasestudianteComponent implements OnInit {
  notas: Nota[] = [];
 

  estudiantes: Estudiante[] = [];
  evaluaciones: Evaluacion[] = [];
  clases: Clase[] = [];

  estudiantesMap = new Map<number, EstudianteInfo>();
  evaluacionesMap = new Map<number, Evaluacion>();
  clasesMap = new Map<number, Clase>();
  cursosMap = new Map<number, Curso>();
  profesoresMap = new Map<number, Profesor>();

  editando = false;
  notaEditandoId: number | null = null;

  constructor(
    private notaService: NotaService,
    private estudiantesService: EstudiantesService
  ) {}

  ngOnInit(): void {
    this.cargarEstudiantesYNotas();
    this.cargarEvaluaciones();
    this.cargarClases(); 
    this.cargarCursos();    
    this.cargarProfesores();
  }

  cargarEstudiantesYNotas() {
    this.estudiantesService.getEstudiantes().subscribe(estudiantesData => {
      estudiantesData.forEach(est => {
        this.estudiantesMap.set(est.id!, {
          nombreCompleto: `${est.nombre} ${est.apellido}`,
          correo: est.correo
        });
      });

      this.notaService.getNotas().subscribe(notasData => {
        const emailLocal = localStorage.getItem('email');
        if (!emailLocal) {
          this.notas = [];
          return;
        }

        this.notas = notasData.filter(nota => {
          const estInfo = this.estudiantesMap.get(nota.estudiante);
          return estInfo?.correo === emailLocal;
        });
      });
    });
  }

  cargarEvaluaciones() {
    this.notaService.getEvaluaciones().subscribe(data => {
      this.evaluaciones = data;
      data.forEach(ev => {
        this.evaluacionesMap.set(ev.id!, ev);
      });
    });
  }

  cargarClases() {
    this.notaService.getClases().subscribe(data => {
      this.clases = data;
      data.forEach(clase => {
        this.clasesMap.set(clase.id!, clase);
      });
    });
  }

  cargarCursos() {
  this.notaService.getCursos().subscribe(data => {
    data.forEach(curso => {
      this.cursosMap.set(curso.id!, curso);
    });
  });
}

cargarProfesores() {
  this.notaService.getProfesores().subscribe(data => {
    data.forEach(profesor => {
      this.profesoresMap.set(profesor.id!, profesor);
    });
  });
}

}
