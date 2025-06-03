import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ClasesService } from 'src/app/core/services/clases.service';
import { Clase } from '../../../model/clases-model';
import { Curso } from '../../../model/curso-model';
import { Profesor } from '../../../model/profesores-model';

@Component({
  selector: 'app-clases',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './clases.component.html',
})
export class ClasesComponent implements OnInit { 
  clases: Clase[] = []; 
  clase: Clase = this.resetClase(); 
  cursos: Curso[] = []; 
  profesores: Profesor[] = []; 
  editando: boolean = false; 
  claseEditandoId: number | null = null; 

  constructor(private claseService: ClasesService) {}

  ngOnInit(): void { 
    this.cargarClases(); 
    this.cargarCursos(); 
    this.cargarProfesores(); 
  }

  cargarClases() { 
    this.claseService.getClases().subscribe(data => this.clases = data); 
  }

  cargarCursos() {
    this.claseService.getCursos().subscribe(data => this.cursos = data); 
  }

  cargarProfesores() {
    this.claseService.getProfesores().subscribe(data => this.profesores = data); 
  }

guardarClase() {
  this.clase.curso = Number(this.clase.curso); 
  this.clase.profesor = Number(this.clase.profesor); 

  if (this.editando && this.claseEditandoId !== null) { 
    this.claseService.updateClase(this.claseEditandoId, this.clase).subscribe(() => { 
      this.resetFormulario(); 
      this.cargarClases(); 
    });
  } else {
    this.claseService.addClase(this.clase).subscribe(() => { 
      this.resetFormulario(); 
      this.cargarClases(); 
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
      this.claseService.deleteClase(clase.id!).subscribe(() => this.cargarClases()); 
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
