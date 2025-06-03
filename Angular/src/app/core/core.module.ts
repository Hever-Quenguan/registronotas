import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';  // Importa ReactiveFormsModule y FormsModule

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,  // Añadir ReactiveFormsModule
    FormsModule           // Añadir FormsModule si usas ngModel
  ]
})
export class CoreModule { }
