import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioModel } from '../../../model/usuario-model';
import { FiltrosUsuarioModel } from '../../../model/filtros-usuario-model';
import { AdminService } from '../../../core/services/admin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioFullModel } from '../../../model/usuarioFull-model ';

@Component({
  selector: 'app-usuarios',
  standalone: true, // Habilitar standalone component
  imports: [
    CommonModule,         // Para directivas como *ngIf, *ngFor
    ReactiveFormsModule   // Para formularios reactivos
  ],
  templateUrl: './usuarios.component.html',
  styles: []
})


export class UsuariosComponent implements OnInit {
  filterUsuariosForm: any;
  state: boolean;
  usuarios: UsuarioModel[];
  filtro: FiltrosUsuarioModel;
  infoUsuarioForm: any;
  selectTipoDoc: string;
  selectperfil: string;
  emailNgm: string;
  optestadoNgm = '0';
  usuarioModel: UsuarioModel;
  usuariosFull: UsuarioFullModel[];
  tipoIdetificacionNg: string;
  numeroDocumentoNg: string;
  nombresNg: string;
  apellidosNg: string;
  idUsuarioNgm: string;
  perfilNgm: number;
  telefonoNgm: string;
  usuarioFullModel: UsuarioFullModel;
  page = 1;
  pageSize = 5;



  constructor(private formBuilder: FormBuilder,
              private formBuilderInfUsuario: FormBuilder,
              private adminService: AdminService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.filterUsuariosForm = this.formBuilder.group({
      tipoDoc: '',
      documento: '',
      estado: null,
      idPerfil: null
    });

    this.infoUsuarioForm = this.formBuilderInfUsuario.group({
      id: [0],
      uid: ['0'],
      clave: [''], // puedes dejarla vacía si no se registra aún
      email: [''],
      fechaNacimiento: ['2000-01-01T00:00:00.000Z'],
      idGenero: [0], // 0 por defecto o puedes poner select
      nivel: [''],   // puede ser 'Básico', 'Avanzado' si aplica
      nombres: [''],
      apellidos: [''],
      tipoIdentificacion: [''],  // corregido
      telefono: [''],
      numeroDocumento: [''],
      totalPuntos: [0],
      dateRegister: [new Date().toISOString()], // fecha actual ISO
      temporal: [''],
      tipoUsuario: [''], // puede ser "CLIENTE", "ADMIN", etc
      deviceToken: [''], // puedes dejarlo vacío
      estado: [true], // o false si aún no está activo
      perfil: [0]     // o el número del perfil seleccionado
    });

    this.filter();

  }

  filter() {
    this.state = false;
    this.validarVacios();

    this.adminService.obtenerUsuariosFull().subscribe(res => {
        console.log('Datos Impresos',res);
        this.usuariosFull = res;
        this.state = true;
    });

    this.adminService.obtenerUsuarios(this.filtro).subscribe(data => {
        console.log(data);

        // Verifica si `data` es un array, si no, asigna un array vacío
        this.usuarios = Array.isArray(data) ? data : [];

        this.state = true;
    });
}


  obtenerUsuarios(){

  }

  guardarUsuario() {
    if (this.infoUsuarioForm.status === 'VALID') {
      this.usuarioModel = this.infoUsuarioForm.value;
      this.usuarioModel.perfil = Number(this.selectperfil);
      this.usuarioModel.estado = Number(this.optestadoNgm)
      if (this.optestadoNgm === '0') {
        this.usuarioModel.estado = false;
      } else {
        this.usuarioModel.estado = true;
      }
      // var dateFormat = require('dateformat');
      // var now = new Date();
      // this.usuarioModel.dateRegister = dateFormat(now, 'yyyy-mm-dd');
      // this.usuarioModel.fechaNacimiento = dateFormat(now, 'yyyy-mm-dd');
      // console.log( this.usuarioModel);
      this.adminService.guardarUsuario(this.usuarioModel)
      .subscribe(data => {
        alert('Registro exitoso');
        this.filter();
        // this.isEditCuentaBanco = true;
        // this.cargarDatosCuentaBancaria();
      }, error => {
        if (error.status === 400) {
          alert('Error al registrar, Correo ya existe');
          // this.isEditCuentaBanco = false;
        } else {
          alert('Error al registrar');
          // this.isEditCuentaBanco = false;
        }
      });
  }else {
    alert('Campos incompletos');
  }
}

buscarUsuarioPorId(idUsuario: string){


  this.usuarioModel = this.usuarios.find(x => x.id === idUsuario);
  // console.log('usmod', this.usuarioModel);

  this.usuarioFullModel = this.usuariosFull.find(x => x.id === idUsuario);
  // console.log('usmodFull', this.usuarioFullModel);

  this.tipoIdetificacionNg = this.usuarioModel.tipoIdentificacion;
  this.numeroDocumentoNg = this.usuarioModel.numeroDocumento;
  this.nombresNg = this.usuarioModel.nombres;
  this.apellidosNg = this.usuarioModel.apellidos;
  this.emailNgm = this.usuarioModel.email;
  this.perfilNgm = this.usuarioModel.perfil;
  this.idUsuarioNgm = this.usuarioModel.id;
  this.optestadoNgm = this.usuarioFullModel.estado ? '1' : '0';
  this.telefonoNgm = this.usuarioModel.telefono;

}

  editarUsuario(){

    if (this.infoUsuarioForm.status === 'VALID') {
      this.usuarioModel = this.infoUsuarioForm.value;
      this.usuarioModel.id = this.idUsuarioNgm;
      this.usuarioModel.perfil = Number(this.perfilNgm);
      this.usuarioModel.estado = Number(this.optestadoNgm)
      this.usuarioModel.clave = this.usuarioFullModel.clave;
      this.usuarioModel.tipoUsuario = this.usuarioFullModel.tipoUsuario;
      this.usuarioModel.fechaNacimiento = this.usuarioFullModel.fechaNacimiento;
      this.usuarioModel.dateRegister = this.usuarioFullModel.dateRegister.toString();
      this.usuarioModel.nivel = this.usuarioFullModel.nivel;
      this.usuarioModel.idGenero = this.usuarioFullModel.idGenero;
      this.usuarioModel.totalPuntos = this.usuarioFullModel.totalPuntos;
      this.usuarioModel.temporal = this.usuarioFullModel.temporal;
      this.usuarioModel.aceptoTyC = this.usuarioFullModel.aceptoTyC;
      this.usuarioModel.autorizoTdp = this.usuarioFullModel.autorizoTdp;
      this.usuarioModel.uid = this.usuarioFullModel.uid;
      // console.log('model edit',this.usuarioModel);
      if (this.optestadoNgm === '0') {
        this.usuarioModel.estado = false;
      } else {
        this.usuarioModel.estado = true;
      }
      this.adminService.editarUsuario(this.usuarioModel)
      .subscribe((data: any) => {
        alert('El registro se ha modificado exitosamente');
        this.filter();
        // this.isEditCuentaBanco = true;
        // this.cargarDatosCuentaBancaria();
      }, error => {
        if (error.status === 400) {
          alert('Error al registrar, revise e intente nuevamente');
          // this.isEditCuentaBanco = false;
        } else {
          alert('Error al registrar');
          // this.isEditCuentaBanco = false;
        }
      });
    }else{
      alert('Campos incompletos');
    }
  }

  validarVacios(){
    this.filtro = this.filterUsuariosForm.value;

    if(this.filtro.tipoDoc === ''){
      this.filtro.tipoDoc = '';
    }
    if(this.filtro.documento === '') {
      this.filtro.documento = '';
    }
    if(this.filtro.estado === ''){
      this.filtro.estado = null;
    }
    if(this.filtro.idPerfil === ''){
      this.filtro.idPerfil = null;
    }
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }

  openLgEdit(contentEditar) {
    this.modalService.open(contentEditar, { size: 'lg', centered: true });
  }

  get f() { return this.infoUsuarioForm.controls; }


}
