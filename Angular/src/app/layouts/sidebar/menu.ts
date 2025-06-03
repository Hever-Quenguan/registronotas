import { MenuItem } from './menu.model';

const rol = localStorage.getItem('Rol');
console.log('ROL de usuario:', rol);

const dashboardSubItems: MenuItem[] = [];

if (rol === 'admin') {
  dashboardSubItems.push(
    {
      id: 3,
      label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
      link: '/dashboard',
      parentId: 2
    },
    {
      id: 4,
      label: 'Gestion Estudiante',
      link: '/dashboards/estudiantes',
      parentId: 2
    },
    {
      id: 5,
      label: 'Gestion Profesores',
      link: '/dashboards/profesores',
      parentId: 2
    },
    {
      id: 6,
      label: 'Gestion Cursos',
      link: '/dashboards/cursos',
      parentId: 2
    },
    {
      id: 7,
      label: 'Gestion de Clases',
      link: '/dashboards/clases',
      parentId: 2
    },
    {
      id: 8,
      label: 'Gestion de Evaluaciones',
      link: '/dashboards/evaluacion',
      parentId: 2
    },
    {
      id: 9,
      label: 'Asignar Notas',
      link: '/dashboards/notas',
      parentId: 2
    }
  );
}

if (rol === 'Estudiante') {
  dashboardSubItems.push(
    {
      id: 10,
      label: 'Mis Notas',
      link: '/dashboards/notasestudiantes',
      parentId: 2
    },
  );
}

if (rol === 'Profesor') {
  dashboardSubItems.push(
    {
      id: 12,
      label: 'Ver Clases',
      link: '/dashboards/clasesprofesor',
      parentId: 2
    },
    {
      id: 13,
      label: 'Evaluaciones',
      link: '/dashboards/evaluacion',
      parentId: 2
    },
    {
      id: 14,
      label: 'Asignar Notas',
      link: '/dashboards/notas',
      parentId: 2
    }
  );
}

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.MENU.TEXT',
    isTitle: true
  },
  {
    id: 2,
    label: 'MENUITEMS.DASHBOARDS.TEXT',
    icon: 'bx-home-circle',
    subItems: dashboardSubItems
  }
];
