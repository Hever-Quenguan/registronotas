import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { emailSentBarChart, monthlyEarningChart } from './data';
import { ChartType } from './dashboard.model';
import { BsModalService, BsModalRef, ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { EventService } from '../../../core/services/event.service';
import { ConfigService } from '../../../core/services/config.service';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TransactionComponent } from 'src/app/shared/widget/transaction/transaction.component';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';
import { LoaderComponent } from 'src/app/shared/ui/loader/loader.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  standalone: true,
  imports: [
    PagetitleComponent,
    LoaderComponent,
    CommonModule,
    NgApexchartsModule,
    BsDropdownModule,
    ModalModule,
    TransactionComponent,
    RouterModule
  ]
})
export class DefaultComponent implements OnInit {
  modalRef?: BsModalRef;
  isVisible: string;

  emailSentBarChart: ChartType;
  monthlyEarningChart: ChartType;
  transactions: any;
  statData: any;
  config: any = {
    backdrop: true,
    ignoreBackdropClick: true
  };
  username: string;
  rol: string;

  isActive: string;

  menuItems: Array<{ title: string; link: string; icon: string; description: string }> = [];

  @ViewChild('content') content;
  @ViewChild('center', { static: false }) center?: ModalDirective;

  constructor(
    private modalService: BsModalService,
    private configService: ConfigService,
    private eventService: EventService
  ) {}

  ngOnInit() {
     this.username = localStorage.getItem('username') || '';
     this.rol = localStorage.getItem('Rol') || '';
    const attribute = document.body.getAttribute('data-layout');
    this.isVisible = attribute;

    const vertical = document.getElementById('layout-vertical');
    if (vertical != null) vertical.setAttribute('checked', 'true');

    if (attribute == 'horizontal') {
      const horizontal = document.getElementById('layout-horizontal');
      if (horizontal != null) horizontal.setAttribute('checked', 'true');
    }

    const rol = localStorage.getItem('Rol');

    this.menuItems = [];

    if (rol === 'admin') {
      this.menuItems = [
        { title: 'Dashboard', link: '/dashboard', icon: 'mdi mdi-view-dashboard-outline', description: 'Vista general del sistema' },
        { title: 'Gestión de Estudiantes', link: '/dashboards/estudiantes', icon: 'mdi mdi-school-outline', description: 'Registrar y gestionar estudiantes' },
        { title: 'Gestión de Profesores', link: '/dashboards/profesores', icon: 'mdi mdi-teach', description: 'Administrar datos de profesores' },
        { title: 'Gestión de Cursos', link: '/dashboards/cursos', icon: 'mdi mdi-book-open-outline', description: 'Crear y modificar cursos' },
        { title: 'Gestión de Clases', link: '/dashboards/clases', icon: 'mdi mdi-calendar-multiselect', description: 'Programar y gestionar clases' },
        { title: 'Gestión de Evaluaciones', link: '/dashboards/evaluacion', icon: 'mdi mdi-file-document-edit-outline', description: 'Diseñar y asignar evaluaciones' },
        { title: 'Asignar Notas', link: '/dashboards/notas', icon: 'mdi mdi-lead-pencil', description: 'Asignar calificaciones a los estudiantes' }
      ];
    } else if (rol === 'Estudiante') {
      this.menuItems = [
        { title: 'Mis Notas', link: '/dashboards/notasestudiantes', icon: 'mdi mdi-notebook-check', description: 'Consultar calificaciones obtenidas' },
        { title: 'Mi Cuenta', link: '/micuenta', icon: 'mdi mdi-account-circle', description: 'Perfil y ajustes personales' }
      ];
    } else if (rol === 'Profesor') {
      this.menuItems = [
        { title: 'Ver Clases', link: '/dashboards/clasesprofesor', icon: 'mdi mdi-calendar-account', description: 'Listado de clases asignadas' },
        { title: 'Evaluaciones', link: '/dashboards/evaluacion', icon: 'mdi mdi-clipboard-text-outline', description: 'Gestión de evaluaciones de los estudiantes' },
        { title: 'Asignar Notas', link: '/dashboards/notas', icon: 'mdi mdi-lead-pencil', description: 'Evaluar y calificar estudiantes' },
        { title: 'Mi Cuenta', link: '/micuenta', icon: 'mdi mdi-account-circle', description: 'Perfil y ajustes personales' }
      ];
    }

    this.fetchData();
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.center?.show();
    }, 2000);
  }

  private fetchData() {
    this.emailSentBarChart = emailSentBarChart;
    this.monthlyEarningChart = monthlyEarningChart;

    this.isActive = 'year';
    this.configService.getConfig().subscribe(data => {
      this.transactions = data.transactions;
      this.statData = data.statData;
    });
  }

  opencenterModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  weeklyreport() {
    this.isActive = 'week';
    this.emailSentBarChart.series = [
      {
        name: 'Series A',
        data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
      },
      {
        name: 'Series B',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
      },
      {
        name: 'Series C',
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
      }
    ];
  }

  monthlyreport() {
    this.isActive = 'month';
    this.emailSentBarChart.series = [
      {
        name: 'Series A',
        data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
      },
      {
        name: 'Series B',
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
      },
      {
        name: 'Series C',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
      }
    ];
  }

  yearlyreport() {
    this.isActive = 'year';
    this.emailSentBarChart.series = [
      {
        name: 'Series A',
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
      },
      {
        name: 'Series B',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
      },
      {
        name: 'Series C',
        data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
      }
    ];
  }

  changeLayout(layout: string) {
    this.eventService.broadcast('changeLayout', layout);
  }
}
