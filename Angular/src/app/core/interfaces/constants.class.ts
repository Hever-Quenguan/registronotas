export class FaneroConstants {

  static readonly TKN_HSH = {
    key: '5ruZbbcSkA8nXd6ddxfgvbd4Ur4YGsXX',
    apiKey: 'rmmQ5jtTB9Up5ZqR34s5NcqkV8U4EHMyuFq57ThuYjvaLnanTDKTBWqVQnRH4Urh7VwFZHKL5vatC5vW2XsJ7rC7MVsDC5WT9zNAG4uxjcXZHYVfqBZJXD7XRwwT8jt6'
  };

  static readonly idTienda = 9;
  static readonly pathApi = {

    // Endpoint Develop

    // LogIn: 'https://faneroapiatelierdev.azurewebsites.net/api/LoginBackOffice/signin'
    // DocumentoTienda: 'localhost:55379/api/Upload/DocumentoTienda?IdTienda=5&Documento=DocRepresentanteLegal'
    // https://faneroapiatelierdev.azurewebsites.net/api/orden/ListarPedido

    //Ajojoa123*

    //   Endpoint Producción
    idTienda: FaneroConstants.idTienda,
    GetTKN: 'https://apiabrahamdelgado.azurewebsites.net/api/AuthToken/',
    urlBase: 'https://apiabrahamdelgado.azurewebsites.net/api/',
    LogIn: 'https://apiabrahamdelgado.azurewebsites.net/api/LoginBackOffice/signin',
    RecoveryPass: 'https://apiabrahamdelgado.azurewebsites.net/api/LoginBackOffice/RecuperarClave',
    ListarPedidos: 'https://apiabrahamdelgado.azurewebsites.net/api/orden/ListarPedido',
    GenerarExcelPedidos: 'https://apiabrahamdelgado.azurewebsites.net/api/orden/ListarPedidoExcel',
    SaveNewPass: 'https://apiabrahamdelgado.azurewebsites.net/api/LoginBackOffice/CambiarClave',
    ConteoVisitas: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/ObtenerConteoVisitas?idtienda=',
    MiDiniero: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/MiDinero?idtienda=1',
    BanksPSE: 'https://apiabrahamdelgado.azurewebsites.net/api/pago/ObtenerBancosPse',
    Bancos: 'https://apiabrahamdelgado.azurewebsites.net/api/domain/GetBanks',
    TiposCuenta: 'https://apiabrahamdelgado.azurewebsites.net/api/domain/ObtenerTiposCuenta',
    ObtenerTiposGarantia: 'https://apiabrahamdelgado.azurewebsites.net/api/domain/ObtenerTiposGarantia',
    pingPayU: 'https://sandbox.api.payulatam.com/reports-api/4.0/service.cgi',
    GuardarCuentaBancaria: 'https://apiabrahamdelgado.azurewebsites.nett/api/CuentaBancaria/AgregarCuenta',
    ActualizarCuentaBancaria: 'https://apiabrahamdelgado.azurewebsites.net/api/CuentaBancaria/ActualizarCuenta',
    ObtenerCuentaBancaria: 'https://apiabrahamdelgado.azurewebsites.net/api/CuentaBancaria/ObtenerCuenta?IdTienda=',
    ObtenerEstados: 'https://apiabrahamdelgado.azurewebsites.net/api/domain/ObtenerEstadosOrdenes',
    ObtenerProductosFiltro: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/FiltrarProductos',
    ObtenerDetalleProducto: 'https://apiabrahamdelgado.azurewebsites.net/api/producto/DetalleProducto?id=',
    EliminarProductoBorrador: 'https://apiabrahamdelgado.azurewebsites.net/api/producto/EliminarProductoBorrador?idProducto=',
    ObtenerCategoriasProductos: 'https://apiabrahamdelgado.azurewebsites.net/api/categoria/Obtener',
    ObtenerCategoriasPorTienda: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/ObtenerCatalogos',
    ObtenerCaracteristicasAuto: 'https://apiabrahamdelgado.azurewebsites.net/api/producto/AutoCompletarDetalle?nombre=',
    GuardarCaracteristicas: 'https://apiabrahamdelgado.azurewebsites.net/api/producto/GuardarDetalles',
    AgregarProducto: 'https://apiabrahamdelgado.azurewebsites.net/api/producto/AgregarProducto',
    ActualizarProducto: 'https://apiabrahamdelgado.azurewebsites.net/api/producto/ActualizarProducto',
    EliminarCaracteristicas: 'https://apiabrahamdelgado.azurewebsites.net/api/producto/EliminarTag?idCaracteristica=',
    EliminarTallas: 'https://apiabrahamdelgado.azurewebsites.net/api/producto/EliminarTalla?TallaId=',
    ActualizarTallas: 'https://apiabrahamdelgado.azurewebsites.net/api/producto/ActualizarTallas',
    GuardarTienda: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/AgregarTienda',
    CargarLogo: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/CargarLogo?idTienda=',
    GuardarGarantiaProducto: 'https://apiabrahamdelgado.azurewebsites.net/api/producto/ActualizarGarantia',
    PublicarPrducto: "https://apiabrahamdelgado.azurewebsites.net/api/producto/PublicarArchivar?IdProducto={idProducto}&publicar={publicar}",
    obtenerTienda: 'https://apiabrahamdelgado.azurewebsites.net/api/Tienda/ObtenerTienda?IdTienda=',
    obtenerTiendaPorUsuario: 'https://apiabrahamdelgado.azurewebsites.net/api/Tienda/ObtenerTienda?Usuario=',
    ActualizarTienda: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/ActualizarTienda',
    //VerificarInfo: 'https://apiabrahamdelgado.azurewebsites.net/api/upload/UploadFile?IdTienda=5&UserId=0',
    VerificarInfo: `https://apiabrahamdelgado.azurewebsites.net/api/upload/UploadFile?IdTienda=${FaneroConstants.idTienda}&UserId=0`,
    obtenerInfoTiendaPorUsuario: 'https://apiabrahamdelgado.azurewebsites.net/api/Tienda/ObtenerTienda?Usuario=',
    DocumentoRepLegal: 'https://apiabrahamdelgado.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=',
    DocumentoRut: 'https://apiabrahamdelgado.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=',
    DocumentoExtractoBancario: 'https://apiabrahamdelgado.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=',
    CargarInventario: 'https://apiabrahamdelgado.azurewebsites.net/api/upload/UploadFile?IdTienda=',
    EstadoDocumento: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/ObtenerVerificacionDocumentos?idtienda=',
    ActulizarPrecioProducto: 'https://apiabrahamdelgado.azurewebsites.net/api/producto/ActualizarPrecio',
    ConteoDeVentasTienda: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/ObtenerVentasTienda?idTienda=',
    ConteoDeVisitasTienda: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/ObtenerVisitasTienda?idTienda=',
    SubirImagenesProducto: 'https://apiabrahamdelgado.azurewebsites.net/api/producto/CargarImagenProductoTienda?idTienda=',
    EliminarImagenesProducto: 'https://apiabrahamdelgado.azurewebsites.net/api/banner/EliminarImagen?imgurl=',
    EliminarImagenesyProducto: 'https://apiabrahamdelgado.azurewebsites.net/api/banner/EliminarBanner?Id=',
    CrearImagenesProducto: 'https://apiabrahamdelgado.azurewebsites.net/api/banner/CrearBanners',
    GetImagenesProducto: 'https://apiabrahamdelgado.azurewebsites.net/api/banner/ObtenerBannersTienda?idTienda=',
    EditarImagenesProducto: 'https://apiabrahamdelgado.azurewebsites.net/api/banner/EditarBanners',

    GuardarCorreo: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/GuardarCorreo',
    EliminarCorreo: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/EliminarCorreo?Id=',
    ObtenerCorreos: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/ObtenerCorreos?idTienda=',

    ValoresComisionVenta: 'https://apiabrahamdelgado.azurewebsites.net/api/domain/ObtenerValoresComisiones',
    ParametrizacionEnvioProducto: 'https://apiabrahamdelgado.azurewebsites.net/api/producto/AgregarParametrizacionEnvio',
    ObtenerParametrizacionEnvio: 'https://apiabrahamdelgado.azurewebsites.net/api/producto/ObtenerParametrizacionEnvio?IdProducto=',
    ListarPedidosOpciones: 'https://apiabrahamdelgado.azurewebsites.net/api/orden/ListarPedido',
    conteosEstadoDePedidosOpciones: 'https://apiabrahamdelgado.azurewebsites.net/api/orden/ObtenerConteoEstadosPedido?idtienda=',
    ActualizarDomicilioTienda: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/ActualizarDomicilio',

    ObtenerServicioSitio: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/ObtenerConsumoSitio?idTienda=',
    ActualizarServicioSitio: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/ActualizarConsumoSitio?idTienda={tienda}&state={estado}',

    obtenerDatosComprador: 'https://apiabrahamdelgado.azurewebsites.net/api/orden/ListarDatosComprador?IdOrden=',
    existeEmail: 'https://apiabrahamdelgado.azurewebsites.net/api/persona/ExisteEmail?email=',
    obtenerInformTienda: 'https://apiabrahamdelgado.azurewebsites.net/api/Tienda/ObtenerInformacionTienda?IdTienda=',
    obtenerPayU: 'https://apiabrahamdelgado.azurewebsites.net/api/Tienda/ObtenerPayU?IdTienda=',
    actualizarPayU: 'https://apiabrahamdelgado.azurewebsites.net/api/Tienda/ActualizarPayU',
    OrdenesPorTienda: 'https://apiabrahamdelgado.azurewebsites.net/api/orden/OrdenesPorTienda',
    OrdenesPorTiendaExcel: 'https://apiabrahamdelgado.azurewebsites.net/api/orden/OrdenesPorTiendaExcel',
    guardaEstadoPagoEfectivoManual: 'https://apiabrahamdelgado.azurewebsites.net/api/Orden/GuardaEstadoOrden',

    ObtenerPasarelasPagoDisponibles: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/ObtenerPasarelasPagoDisponibles',
    ObtenerTiendasConPasarelasPago: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/ObtenerTiendasConPasarelasPago',
    InsertarPasarelasPagoTiendaActivaDesactiva: 'https://apiabrahamdelgado.azurewebsites.net/api/tienda/InsertarPasarelasPagoTiendaActivaDesactiva',

    ObtenerPersonaFull: 'https://apiabrahamdelgado.azurewebsites.net/api/persona/ObtenerPersonaFull',
    UpdatePersona: 'https://apiabrahamdelgado.azurewebsites.net/api/persona/UpdatePerson',



    //PORDUCCION V2
    //·####################################################################################33
    /**
    GetTKN: 'https://apifanerov2.azurewebsites.net/api/AuthToken/',
       urlBase:'https://apifanerov2.azurewebsites.net/api/',
       LogIn: 'https://apifanerov2.azurewebsites.net/api/LoginBackOffice/signin',
       RecoveryPass: 'https://apifanerov2.azurewebsites.net/api/LoginBackOffice/RecuperarClave',
       ListarPedidos: 'https://apifanerov2.azurewebsites.net/api/orden/ListarPedido',
       GenerarExcelPedidos: 'https://apifanerov2.azurewebsites.net/api/orden/ListarPedidoExcel',
       SaveNewPass: 'https://apifanerov2.azurewebsites.net/api/LoginBackOffice/CambiarClave',
       ConteoVisitas: 'https://apifanerov2.azurewebsites.net/api/tienda/ObtenerConteoVisitas?idtienda=',
       MiDiniero: 'https://apifanerov2.azurewebsites.net/api/tienda/MiDinero?idtienda=1',
       BanksPSE: 'https://apifanerov2.azurewebsites.net/api/pago/ObtenerBancosPse',
       Bancos: 'https://apifanerov2.azurewebsites.net/api/domain/GetBanks',
       TiposCuenta: 'https://apifanerov2.azurewebsites.net/api/domain/ObtenerTiposCuenta',
       ObtenerTiposGarantia: 'https://apifanerov2.azurewebsites.net/api/domain/ObtenerTiposGarantia',
       pingPayU: 'https://sandbox.api.payulatam.com/reports-api/4.0/service.cgi',
       GuardarCuentaBancaria: 'https://apifanerov2.azurewebsites.net/api/CuentaBancaria/AgregarCuenta',
       ActualizarCuentaBancaria: 'https://apifanerov2.azurewebsites.net/api/CuentaBancaria/ActualizarCuenta',
       ObtenerCuentaBancaria: 'https://apifanerov2.azurewebsites.net/api/CuentaBancaria/ObtenerCuenta?IdTienda=',
       ObtenerEstados:'https://apifanerov2.azurewebsites.net/api/domain/ObtenerEstadosOrdenes',
       ObtenerProductosFiltro: 'https://apifanerov2.azurewebsites.net/api/tienda/FiltrarProductos',
       ObtenerDetalleProducto: 'https://apifanerov2.azurewebsites.net/api/producto/DetalleProducto?id=',
       EliminarProductoBorrador:'https://apifanerov2.azurewebsites.net/api/producto/EliminarProductoBorrador?idProducto=',
       ObtenerCategoriasProductos: 'https://apifanerov2.azurewebsites.net/api/categoria/Obtener',
       ObtenerCategoriasPorTienda: 'https://apifanerov2.azurewebsites.net/api/tienda/ObtenerCatalogos',
       ObtenerCaracteristicasAuto: 'https://apifanerov2.azurewebsites.net/api/producto/AutoCompletarDetalle?nombre=',
       GuardarCaracteristicas: 'https://apifanerov2.azurewebsites.net/api/producto/GuardarDetalles',
       AgregarProducto: 'https://apifanerov2.azurewebsites.net/api/producto/AgregarProducto',
       ActualizarProducto: 'https://apifanerov2.azurewebsites.net/api/producto/ActualizarProducto',
       EliminarCaracteristicas: 'https://apifanerov2.azurewebsites.net/api/producto/EliminarTag?idCaracteristica=',
       GuardarTienda: 'https://apifanerov2.azurewebsites.net/api/tienda/AgregarTienda',
       CargarLogo: 'https://apifanerov2.azurewebsites.net/api/tienda/CargarLogo?idTienda=',
       GuardarGarantiaProducto: 'https://apifanerov2.azurewebsites.net/api/producto/ActualizarGarantia',
       PublicarPrducto:  "https://apifanerov2.azurewebsites.net/api/producto/PublicarArchivar?IdProducto={idProducto}&publicar={publicar}",
       obtenerTienda: 'https://apifanerov2.azurewebsites.net/api/Tienda/ObtenerTienda?IdTienda=',
       obtenerTiendaPorUsuario: 'https://apifanerov2.azurewebsites.net/api/Tienda/ObtenerTienda?Usuario=',
       ActualizarTienda: 'https://apifanerov2.azurewebsites.net/api/tienda/ActualizarTienda',
       VerificarInfo: 'https://apifanerov2.azurewebsites.net/api/upload/UploadFile?IdTienda=5&UserId=0',
       obtenerInfoTiendaPorUsuario: 'https://apifanerov2.azurewebsites.net/api/Tienda/ObtenerTienda?Usuario=',
       DocumentoRepLegal: 'https://apifanerov2.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=',
       DocumentoRut: 'https://apifanerov2.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=',
       DocumentoExtractoBancario: 'https://apifanerov2.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=',
       CargarInventario: 'https://apifanerov2.azurewebsites.net/api/upload/UploadFile?IdTienda=',
       EstadoDocumento: 'https://apifanerov2.azurewebsites.net/api/tienda/ObtenerVerificacionDocumentos?idtienda=',
       ActulizarPrecioProducto: 'https://apifanerov2.azurewebsites.net/api/producto/ActualizarPrecio',
       ConteoDeVentasTienda: 'https://apifanerov2.azurewebsites.net/api/tienda/ObtenerVentasTienda?idTienda=',
       ConteoDeVisitasTienda: 'https://apifanerov2.azurewebsites.net/api/tienda/ObtenerVisitasTienda?idTienda=',
       SubirImagenesProducto:'https://apifanerov2.azurewebsites.net/api/producto/CargarImagenProductoTienda?idTienda=',

       GuardarCorreo:'https://apifanerov2.azurewebsites.net/api/tienda/GuardarCorreo',
       EliminarCorreo:'https://apifanerov2.azurewebsites.net/api/tienda/EliminarCorreo?Id=',
       ObtenerCorreos:'https://apifanerov2.azurewebsites.net/api/tienda/ObtenerCorreos?idTienda=',

       ValoresComisionVenta: 'https://apifanerov2.azurewebsites.net/api/domain/ObtenerValoresComisiones',
       ParametrizacionEnvioProducto: 'https://apifanerov2.azurewebsites.net/api/producto/AgregarParametrizacionEnvio',
       ObtenerParametrizacionEnvio: 'https://apifanerov2.azurewebsites.net/api/producto/ObtenerParametrizacionEnvio?IdProducto=',
       ListarPedidosOpciones: 'https://apifanerov2.azurewebsites.net/api/orden/ListarPedido',
       conteosEstadoDePedidosOpciones: 'https://apifanerov2.azurewebsites.net/api/orden/ObtenerConteoEstadosPedido?idtienda=',
       ActualizarDomicilioTienda:'https://apifanerov2.azurewebsites.net/api/tienda/ActualizarDomicilio',

       ObtenerServicioSitio:'https://apifanerov2.azurewebsites.net/api/tienda/ObtenerConsumoSitio?idTienda=',
       ActualizarServicioSitio:'https://apifanerov2.azurewebsites.net/api/tienda/ActualizarConsumoSitio?idTienda={tienda}&state={estado}',

       obtenerDatosComprador: 'https://apifanerov2.azurewebsites.net/api/orden/ListarDatosComprador?IdOrden=',
       existeEmail: 'https://apifanerov2.azurewebsites.net/api/persona/ExisteEmail?email=',
       obtenerInformTienda:'https://apifanerov2.azurewebsites.net/api/Tienda/ObtenerInformacionTienda?IdTienda=',
       obtenerPayU:'https://apifanerov2.azurewebsites.net/api/Tienda/ObtenerPayU?IdTienda=',
       actualizarPayU:'https://apifanerov2.azurewebsites.net/api/Tienda/ActualizarPayU',
       OrdenesPorTienda: 'https://apifanerov2.azurewebsites.net/api/orden/OrdenesPorTienda',
       OrdenesPorTiendaExcel: 'https://apifanerov2.azurewebsites.net/api/orden/OrdenesPorTiendaExcel',
       guardaEstadoPagoEfectivoManual: 'https://apifanerov2.azurewebsites.net/api/Orden/GuardaEstadoOrden',

       ObtenerPasarelasPagoDisponibles : 'https://apifanerov2.azurewebsites.net/api/tienda/ObtenerPasarelasPagoDisponibles',
       ObtenerTiendasConPasarelasPago: 'https://apifanerov2.azurewebsites.net/api/tienda/ObtenerTiendasConPasarelasPago',
       InsertarPasarelasPagoTiendaActivaDesactiva: 'https://apifanerov2.azurewebsites.net/api/tienda/InsertarPasarelasPagoTiendaActivaDesactiva',
      **/










    //   //   Endpoint desarrollo
    //   GetTKN: 'https://faneroapiatelierdev.azurewebsites.net/api/AuthToken/',
    ////Server=katary.database.windows.net;Database=FaneroProd;UID=faneroapi;PWD=Admincjt^t1980*;
    //   urlBase:'https://faneroapiatelierdev.azurewebsites.net/api/',
    //   LogIn: 'https://faneroapiatelierdev.azurewebsites.net/api/LoginBackOffice/signin',
    //   RecoveryPass: 'https://faneroapiatelierdev.azurewebsites.net/api/LoginBackOffice/RecuperarClave',
    //   ListarPedidos: 'https://faneroapiatelierdev.azurewebsites.net/api/orden/ListarPedido',
    //   GenerarExcelPedidos: 'https://faneroapiatelierdev.azurewebsites.net/api/orden/ListarPedidoExcel',
    //   SaveNewPass: 'https://faneroapiatelierdev.azurewebsites.net/api/LoginBackOffice/CambiarClave',
    //   ConteoVisitas: 'https://faneroapiatelierdev.azurewebsites.net/api/tienda/ObtenerConteoVisitas?idtienda=',
    //   MiDiniero: 'https://faneroapiatelierdev.azurewebsites.net/api/tienda/MiDinero?idtienda=1',
    //   BanksPSE: 'https://faneroapiatelierdev.azurewebsites.net/api/pago/ObtenerBancosPse',
    //   Bancos: 'https://faneroapiatelierdev.azurewebsites.net/api/domain/GetBanks',
    //   TiposCuenta: 'https://faneroapiatelierdev.azurewebsites.net/api/domain/ObtenerTiposCuenta',
    //   GuardarCuentaBancaria: 'https://faneroapiatelierdev.azurewebsites.net/api/CuentaBancaria/AgregarCuenta',
    //   ActualizarCuentaBancaria: 'https://faneroapiatelierdev.azurewebsites.net/api/CuentaBancaria/ActualizarCuenta',
    //   ObtenerCuentaBancaria: 'https://faneroapiatelierdev.azurewebsites.net/api/CuentaBancaria/ObtenerCuenta?IdTienda=',

    //   ObtenerProductosFiltro: 'https://faneroapiatelierdev.azurewebsites.net/api/tienda/FiltrarProductos',
    //   ObtenerDetalleProducto: 'https://faneroapiatelierdev.azurewebsites.net/api/producto/DetailProduct?id=',
    //   ObtenerCategoriasProductos: 'https://faneroapiatelierdev.azurewebsites.net/api/categoria/Obtener',
    //   ObtenerCaracteristicasAuto: 'https://faneroapiatelierdev.azurewebsites.net/api/producto/AutoCompletarDetalle?nombre=',
    //   GuardarCaracteristicas: 'https://faneroapiatelierdev.azurewebsites.net/api/producto/GuardarDetalles',
    //   AgregarProducto: 'https://faneroapiatelierdev.azurewebsites.net/api/producto/AgregarProducto',
    //   GuardarTienda: 'https://faneroapiatelierdev.azurewebsites.net/api/tienda/AgregarTienda',
    //   CargarLogo: 'https://faneroapiatelierdev.azurewebsites.net/api/tienda/CargarLogo?idTienda=',
    //   GuardarGarantiaProducto: 'https://faneroapiatelierdev.azurewebsites.net/api/producto/ActualizarGarantia',
    //   PublicarPrducto:  "https://faneroapiatelierdev.azurewebsites.net/api/producto/PublicarArchivar?IdProducto={idProducto}&publicar={publicar}",
    //   obtenerTienda: 'https://faneroapiatelierdev.azurewebsites.net/api/Tienda/ObtenerTienda?IdTienda=',
    //   obtenerTiendaPorUsuario: 'https://faneroapiatelierdev.azurewebsites.net/api/Tienda/ObtenerTienda?Usuario=',
    //   ActualizarTienda: 'https://faneroapiatelierdev.azurewebsites.net/api/tienda/ActualizarTienda',
    //   VerificarInfo: 'https://faneroapiatelierdev.azurewebsites.net/api/upload/UploadFile?IdTienda=5&UserId=0',
    //   obtenerInfoTiendaPorUsuario: 'https://faneroapiatelierdev.azurewebsites.net/api/Tienda/ObtenerTienda?Usuario=',
    //   DocumentoRepLegal: 'https://faneroapiatelierdev.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=',
    //   DocumentoRut: 'https://faneroapiatelierdev.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=',
    //   DocumentoExtractoBancario: 'https://faneroapiatelierdev.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=',
    //   CargarInventario: 'https://faneroapiatelierdev.azurewebsites.net/api/upload/UploadFile?IdTienda=',
    //   EstadoDocumento: 'https://faneroapiatelierdev.azurewebsites.net/api/tienda/ObtenerVerificacionDocumentos?idtienda=',
    //   ActulizarPrecioProducto: 'https://faneroapiatelierdev.azurewebsites.net/api/producto/ActualizarPrecio',

    //   ValoresComisionVenta: 'https://faneroapiatelierdev.azurewebsites.net/api/domain/ObtenerValoresComisiones',
    //   ParametrizacionEnvioProducto: 'https://faneroapiatelierdev.azurewebsites.net/api/producto/AgregarParametrizacionEnvio',
    //   ObtenerParametrizacionEnvio: 'https://faneroapiatelierdev.azurewebsites.net/api/producto/ObtenerParametrizacionEnvio?IdProducto=',
    //   ListarPedidosOpciones: 'https://faneroapiatelierdev.azurewebsites.net/api/orden/ListarPedido',
    //   conteosEstadoDePedidosOpciones: 'https://faneroapiatelierdev.azurewebsites.net/api/orden/ObtenerConteoEstadosPedido?idtienda=',

    //   obtenerDatosComprador: 'https://faneroapiatelierdev.azurewebsites.net/api/orden/ListarDatosComprador?IdOrden=',
    //   existeEmail: 'https://faneroapiatelierdev.azurewebsites.net/api/persona/ExisteEmail?email=',
    //   obtenerInformTienda:'https://faneroapiatelierdev.azurewebsites.net/api/Tienda/ObtenerInformacionTienda?IdTienda=',


    //   OrdenesPorTienda: 'https://faneroapiatelierdev.azurewebsites.net/api/orden/OrdenesPorTienda',
    //   OrdenesPorTiendaExcel: 'https://faneroapiatelierdev.azurewebsites.net/api/orden/OrdenesPorTiendaExcel',
    //   guardaEstadoPagoEfectivoManual: 'https://faneroapiatelierdev.azurewebsites.net/api/Orden/GuardaEstadoOrden',



  };

  static readonly ApiEntregas = {
    urlBase: 'https://faneroentregasapi.azurewebsites.net/api/Fanero/',
    solicitarServicio: 'https://faneroentregasapi.azurewebsites.net/api/Fanero/DeliveryBrand/Save'
  }

  static readonly estadosProducto = {
    ARCHIVADO: 'Archivado',
    BORRADOR: 'Borrador',
    PUBLICADO: 'Publicado'
  }
}

