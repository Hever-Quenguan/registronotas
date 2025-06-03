import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { CursosComponent } from './cursos/curso.component';
import { ClasesComponent } from './clases/clases.component';
import { EvaluacionesComponent } from './evaluacion/evaluacion.component';
import { NotasComponent } from './notas/notas.component';

const routes: Routes = [
    {
        path: 'default', 
        component: DefaultComponent 
    },

     {
        path: 'estudiantes', 
        component: EstudiantesComponent 
    },
    {
        path: 'profesores', 
        component: ProfesoresComponent 
    },

    {
        path: 'cursos',  
        component: CursosComponent 
    },
    {
        path: 'clases', 
        component: ClasesComponent 
    },
    {
        path: 'evaluacion', 
        component: EvaluacionesComponent 
    },
    {
        path: 'notas',  
        component: NotasComponent 
    },
];

@NgModule({ 
    imports: [RouterModule.forChild(routes)], 
    exports: [RouterModule] 
})
export class DashboardsRoutingModule {}
