export interface CategoriaModel{
    id:number; 
    nombre:string; 
    userId:string; 
    idPadre:number; 
    dateRegister:Date;
    icono:string; 
    colorFondo:string  
    subCategorias:CategoriaModel[]; 
}