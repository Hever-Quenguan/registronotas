import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/core/services/cursos.service';
import { Curso } from '../../../model/curso-model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({ 
  selector: 'app-cursos',  
  standalone: true, 
  imports: [CommonModule, FormsModule, HttpClientModule], 
  templateUrl: './curso.component.html', 
}) 
export class CursosComponent implements OnInit { 
  cursos: Curso[] = []; 
  curso: Curso = this.resetCurso(); 
  editando: boolean = false; 
  cursoEditandoId: number | null = null; 

  constructor(private cursoService: CursosService) {} 

  ngOnInit(): void { 
    this.cargarCursos(); 
  } 

  cargarCursos() { 
    this.cursoService.getCursos().subscribe(data => this.cursos = data); 
  } 

  guardarCurso() { 
    if (this.editando && this.cursoEditandoId !== null) { 
      this.cursoService.updateCurso(this.cursoEditandoId, this.curso).subscribe(() => { 
        this.resetFormulario(); 
        this.cargarCursos(); 
      });
    } else {
      this.cursoService.addCurso(this.curso).subscribe(() => { 
        this.resetFormulario(); 
        this.cargarCursos(); 
      });
    }
  }

  editar(curso: Curso) { 
    this.curso = { ...curso }; 
    this.editando = true; 
    this.cursoEditandoId = curso.id ?? null; 
  }

  eliminar(curso: Curso) { 
    if (confirm('¿Eliminar este curso?') && curso.id) { 
      this.cursoService.deleteCurso(curso.id).subscribe(() => this.cargarCursos()); 
    }
  }

  resetFormulario() { 
    this.curso = this.resetCurso(); 
    this.editando = false; 
    this.cursoEditandoId = null; 
  }

  resetCurso(): Curso { 
    return { 
      nombre: '', 
      descripcion: '' 
    };
  }
}
