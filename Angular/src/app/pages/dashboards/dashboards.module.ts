import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsRoutingModule } from './dashboards-routing.module';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { importProvidersFrom } from '@angular/core';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { CursosComponent } from './cursos/curso.component';
import { ClasesComponent } from './clases/clases.component';
import { EvaluacionesComponent } from './evaluacion/evaluacion.component';
import { NotasComponent } from './notas/notas.component';
import { ClasesprofesorComponent } from './clasesprofesor/clasesprofesor.component';
import { NotasestudianteComponent } from './notasestudiantes/notasestudiante.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardsRoutingModule,
    EstudiantesComponent,
    ProfesoresComponent,
    CursosComponent,
    ClasesComponent,
    EvaluacionesComponent,
    ClasesprofesorComponent,
    NotasComponent,
    NotasestudianteComponent,
    PagetitleComponent ,
    GoogleMapsModule,
    NgbNavModule,
    ReactiveFormsModule,
  
    PaginationModule.forRoot() 
    
  ],
  providers: [BsDropdownConfig],
})
export class DashboardsModule { }
