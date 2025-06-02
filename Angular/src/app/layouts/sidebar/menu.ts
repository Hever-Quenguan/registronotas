import { MenuItem } from './menu.model';

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
    subItems: [
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
        parentId: 2,
      },
      {
        id: 5,
        label: 'Gestion Profesores',
                link: '/dashboards/profesores',
        parentId: 2,
      },
       {
        id: 6,
        label: 'Gestion Cursos',
                link: '/dashboards/cursos',
        parentId: 2,
      },
       {
        id: 7,
        label: 'Gestion de Clases',
                link: '/dashboards/clases',
        parentId: 2,
      },
      {
        id: 8,
        label: 'Gestion de Evaluaciones',
                link: '/dashboards/evaluacion',
        parentId: 2,
      },
      {
        id: 9,
        label: 'Asignar Notas',
                link: '/dashboards/notas',
        parentId: 2,
      },
      
      
      
    ]
  },
  // {
  //   id: 8,
  //   label: 'MENUITEMS.SEGUIMIENTOCONTRATOS.TEXT',
  //   icon: 'bx-home-circle',
  //   subItems: [
  //     {
  //       id: 9,
  //       label: 'MENUITEMS.SEGUIMIENTOCONTRATOS.LIST.CLIENTES',
  //       link: '/clientes',
  //       parentId: 8
  //     },
  //     {
  //       id: 10,
  //       label: 'MENUITEMS.SEGUIMIENTOCONTRATOS.LIST.COLABORADORES',
  //       link: '/colaboradores',
  //       parentId: 8
  //     },
  //     {
  //       id: 11,
  //       label: 'MENUITEMS.SEGUIMIENTOCONTRATOS.LIST.CONTRATOS',
  //       link: '/contratos',
  //       parentId: 8
  //     },
  //     {
  //       id: 12,
  //       label: 'MENUITEMS.SEGUIMIENTOCONTRATOS.LIST.PARAMETROS',
  //       link: '/parametro-general',
  //       parentId: 8
  //     }
  //   ]
  // }, 
  // {
  //   id: 9,
  //   label: 'Fanero - Tiendal',
  //   icon: 'bx-home-circle',
  //   subItems: [

  //     {
  //       id: 1,
  //       label: 'Cliente',
  //               link: '/cliente',
  //       parentId: 9,
  //     },
  //     {
  //       id: 2,
  //       label: 'Cargar Inventario',
  //               link: '/cargar-inventario',
  //       parentId: 9,
  //     },
  //     {
  //       id: 3,
  //       label: 'Banner',
  //               link: '/banner',
  //       parentId: 9,
  //     },
  //     {
  //       id: 4,
  //       label: 'Cambio Contraseña',
  //               link: '/cambio-clave',
  //       parentId: 9,
  //     },
  //     {
  //       id: 5,
  //       label: 'Correos',
  //               link: '/correos',
  //       parentId: 9,
  //     },
  //     {
  //       id: 6,
  //       label: 'Detalle de Producto',
  //               link: '/detalleproducto',
  //       parentId: 9,
  //     },
  //     {
  //       id: 7,
  //       label: 'Domicilio',
  //               link: '/domicilio',
  //       parentId: 9,
  //     },
  //     {
  //       id: 8,
  //       label: 'Envio Producto',
  //               link: '/envioproducto',
  //       parentId: 9,
  //     },
  //     {
  //       id: 9,
  //       label: 'Garantia Producto',
  //               link: '/garantiaproducto',
  //       parentId: 9,
  //     },
  //     {
  //       id: 10,
  //       label: 'Gestion Producto',
  //               link: '/gestionproducto',
  //       parentId: 9,
  //     },
      
  //   ]
    
  // }
  
];

