import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ClasesService } from 'src/app/core/services/clases.service';
import { ProfesoresService } from 'src/app/core/services/profesores.service';
import { CursosService } from 'src/app/core/services/cursos.service';

import { Clase } from '../../../model/clases-model';
import { Curso } from '../../../model/curso-model';
import { Profesor } from '../../../model/profesores-model';

interface ProfesorInfo {
  nombreCompleto: string;
  correo: string;
}

@Component({
  selector: 'app-clases',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './clasesprofesor.component.html',
})
export class ClasesprofesorComponent implements OnInit {
  clases: Clase[] = [];
  clase: Clase = this.resetClase();
  cursos: Curso[] = [];
  profesores: Profesor[] = [];

  profesoresMap = new Map<number, ProfesorInfo>();
  cursosMap = new Map<number, string>(); // Mapa para nombre del curso

  editando: boolean = false;
  claseEditandoId: number | null = null;

  constructor(
    private claseService: ClasesService,
    private profesoresService: ProfesoresService,
    private cursosService: CursosService
  ) {}

  ngOnInit(): void {
    this.cargarProfesoresYClases();
    this.cargarCursos();
  }

  cargarProfesoresYClases() {
    this.profesoresService.getProfesores().subscribe(profesoresData => {
      profesoresData.forEach(prof => {
        this.profesoresMap.set(prof.id!, {
          nombreCompleto: `${prof.nombre} ${prof.apellido}`,
          correo: prof.correo
        });
      });

      this.claseService.getClases().subscribe(clasesData => {
        const emailLocal = localStorage.getItem('email');
        if (!emailLocal) {
          this.clases = [];
          return;
        }

        this.clases = clasesData.filter(clase => {
          const profInfo = this.profesoresMap.get(clase.profesor);
          return profInfo?.correo === emailLocal;
        });
      });
    });
  }

  cargarCursos() {
    this.cursosService.getCursos().subscribe(data => {
      this.cursos = data;
      // Llenar el mapa id -> nombre
      data.forEach(curso => {
        this.cursosMap.set(curso.id!, curso.nombre);  // Asegúrate que `Curso` tiene `nombre`
      });
    });
  }

  guardarClase() {
    this.clase.curso = Number(this.clase.curso);
    this.clase.profesor = Number(this.clase.profesor);

    if (this.editando && this.claseEditandoId !== null) {
      this.claseService.updateClase(this.claseEditandoId, this.clase).subscribe(() => {
        this.resetFormulario();
        this.cargarProfesoresYClases();
      });
    } else {
      this.claseService.addClase(this.clase).subscribe(() => {
        this.resetFormulario();
        this.cargarProfesoresYClases();
      });
    }
  }

  editar(clase: Clase) {
    this.clase = { ...clase };
    this.editando = true;
    this.claseEditandoId = clase.id ?? null;
  }

  eliminar(clase: Clase) {
    if (confirm('¿Eliminar esta clase?')) {
      this.claseService.deleteClase(clase.id!).subscribe(() => this.cargarProfesoresYClases());
    }
  }

  resetFormulario() {
    this.clase = this.resetClase();
    this.editando = false;
    this.claseEditandoId = null;
  }

  resetClase(): Clase {
    return {
      curso: 0,
      profesor: 0,
      horario: '',
      semestre: ''
    };
  }
}
