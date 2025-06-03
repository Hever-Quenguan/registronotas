export class FaneroConstants {

  static readonly TKN_HSH = {
    key: '5ruZbbcSkA8nXd6ddxfgvbd4Ur4YGsXX',
    apiKey: 'rmmQ5jtTB9Up5ZqR34s5NcqkV8U4EHMyuFq57ThuYjvaLnanTDKTBWqVQnRH4Urh7VwFZHKL5vatC5vW2XsJ7rC7MVsDC5WT9zNAG4uxjcXZHYVfqBZJXD7XRwwT8jt6'
  };

  static readonly pathApi = {

    // Endpoint Develop

    // LogIn: 'https://faneroapi.azurewebsites.net/api/LoginBackOffice/signin'
    // DocumentoTienda: 'localhost:55379/api/Upload/DocumentoTienda?IdTienda=5&Documento=DocRepresentanteLegal'
    // https://faneroapi.azurewebsites.net/api/orden/ListarPedido


    //   Endpoint Production

    urlBase: 'https://faneroapi.azurewebsites.net/api/',
    LogIn: 'https://faneroapi.azurewebsites.net/api/LoginBackOffice/signin',
    RecoveryPass: 'https://faneroapi.azurewebsites.net/api/LoginBackOffice/RecuperarClave',
    ListarPedidos: 'https://faneroapi.azurewebsites.net/api/orden/ListarPedido',
    GenerarExcelPedidos: 'https://faneroapi.azurewebsites.net/api/orden/ListarPedidoExcel',
    SaveNewPass: 'https://faneroapi.azurewebsites.net/api/LoginBackOffice/CambiarClave',
    ConteoVisitas: 'https://faneroapi.azurewebsites.net/api/tienda/ObtenerConteoVisitas?idtienda=',
    MiDiniero: 'https://faneroapi.azurewebsites.net/api/tienda/MiDinero?idtienda=1',
    BanksPSE: 'https://faneroapi.azurewebsites.net/api/pago/ObtenerBancosPse',
    Bancos: 'https://faneroapi.azurewebsites.net/api/domain/GetBanks',
    TiposCuenta: 'https://faneroapi.azurewebsites.net/api/domain/ObtenerTiposCuenta',
    GuardarCuentaBancaria: 'https://faneroapi.azurewebsites.net/api/CuentaBancaria/AgregarCuenta',
    ActualizarCuentaBancaria: 'https://faneroapi.azurewebsites.net/api/CuentaBancaria/ActualizarCuenta',
    ObtenerCuentaBancaria: 'https://faneroapi.azurewebsites.net/api/CuentaBancaria/ObtenerCuenta?IdTienda=1',

    ObtenerProductosFiltro: 'https://faneroapi.azurewebsites.net/api/tienda/FiltrarProductos',
    ObtenerDetalleProducto: 'https://faneroapi.azurewebsites.net/api/producto/DetailProduct?id=',

    ObtenerCategoriasProductos: 'https://faneroapi.azurewebsites.net/api/categoria/ObtenerTodasCategorias',
    CrearCategoriaProductos: 'https://faneroapi.azurewebsites.net/api/categoria/CrearCategoria',
    ActualizarCategoriaProductos: 'https://faneroapi.azurewebsites.net/api/categoria/ActualizarCategoria',


    ObtenerCaracteristicasAuto: 'https://faneroapi.azurewebsites.net/api/producto/AutoCompletarDetalle?nombre=',
    GuardarCaracteristicas: 'https://faneroapi.azurewebsites.net/api/producto/GuardarDetalles',
    AgregarProducto: 'https://faneroapi.azurewebsites.net/api/producto/AgregarProducto',
    CargarLogo: 'https://faneroapi.azurewebsites.net/api/tienda/CargarLogo?idTienda=',
    CargarBanner: 'https://faneroapi.azurewebsites.net/api/banner/CargarBanner?IdBanner=',
    GuardarGarantiaProducto: 'https://faneroapi.azurewebsites.net/api/producto/ActualizarGarantia',
    MarcarPagoTienda: 'https://faneroapi.azurewebsites.net/api/Tienda/MarcarPagoSuscripcion',
    obtenerTienda: 'https://faneroapi.azurewebsites.net/api/Tienda/ObtenerTienda?IdTienda=5',
    obtenerTiendaPorUsuario: 'https://faneroapi.azurewebsites.net/api/Tienda/ObtenerTienda?Usuario=',
    ActualizarTienda: 'https://faneroapi.azurewebsites.net/api/tienda/ActualizarTienda',
    VerificarInfo: 'https://faneroapi.azurewebsites.net/api/upload/UploadFile?IdTienda=5&UserId=0',

    // DocumentoRepLegal: 'http://faneroapi.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=5&Documento=DocRepresentanteLegal',
    // DocumentoRut: 'http://faneroapi.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=5&Documento=DocRUT',
    // DocumentoExtractoBancario: 'http://faneroapi.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=5&Documento=DocExtractoBancario',
    CargarInventario: 'https://faneroapi.azurewebsites.net/api/upload/UploadFile?IdTienda=5&UserId=0',
    ActulizarPrecioProducto: 'https://faneroapi.azurewebsites.net/api/producto/ActualizarPrecio',

    ValoresComisionVenta: 'https://faneroapi.azurewebsites.net/api/domain/ObtenerValoresComisiones',
    ParametrizacionEnvioProducto: 'https://faneroapi.azurewebsites.net/api/producto/AgregarParametrizacionEnvio',
    ObtenerParametrizacionEnvio: 'https://faneroapi.azurewebsites.net/api/producto/ObtenerParametrizacionEnvio',
    ListarPedidosOpciones: 'https://faneroapi.azurewebsites.net/api/orden/ListarPedido',
    conteosEstadoDePedidosOpciones: 'https://faneroapi.azurewebsites.net/api/orden/ObtenerConteoEstadosPedido?idtienda=',

    obtenerDatosComprador: 'https://faneroapi.azurewebsites.net/api/orden/ListarDatosComprador?IdOrden=',

    // AppWeb Admin

    GetTKN: 'https://faneroapi.azurewebsites.net/api/AuthToken',


    LoginAdmin: 'https://faneroapi.azurewebsites.net/api/LoginWeb/signin',
    ListarPerfiles: 'https://faneroapi.azurewebsites.net/api/perfiles/ListaPerfiles',
    CrearPerfiles: 'https://faneroapi.azurewebsites.net/api/perfiles/AgregarPerfil',
    ActualizarPerfiles: 'https://faneroapi.azurewebsites.net/api/perfiles/ActualizarPerfil',
    EliminarPerfiles: 'https://faneroapi.azurewebsites.net/api/perfiles/EliminarPerfil?IdPerfil=',
    ListarPermisos: 'https://faneroapi.azurewebsites.net/api/permisos/ListaPermisos',
    AsignarPermisos: 'https://faneroapi.azurewebsites.net/api/permisos/AsignarPermisos',
    ObtenerTiendas: 'https://faneroapi.azurewebsites.net/api/tienda/ObtenerTiendas',
    ObtenerTiendasXid: 'https://faneroapi.azurewebsites.net/api/Tienda/Ob tenerInformacionTienda?IdTienda=',
    ObtenerTiendasFiltro: 'https://faneroapi.azurewebsites.net/api/tienda/FiltrarTiendas',
    ObtenerMetodosPago: 'https://faneroapi.azurewebsites.net/api/pago/ListarMetodosPago',
    ActivarDescativarMetodosPago: 'https://faneroapi.azurewebsites.net/api/pago/ActivarDesactivarMetodosPago',
    ListaUsuarios: 'https://faneroapi.azurewebsites.net/api/persona/ListaDetalleUsuario',
    ListaUsuariosFull: 'https://faneroapi.azurewebsites.net/api/persona/ObtenerPersonaFull',
    guardarUsuarioAdmin: 'https://faneroapi.azurewebsites.net/api/persona/AgregarUsuarioAdmin',
   ObtenerUusuarioPorId: 'https://faneroapi.azurewebsites.net/api/persona/',
    ActualizaUsuarioAdmin: 'https://faneroapi.azurewebsites.net/api/persona/ActualizaUsuarioAdmin',

    ListarOrdenConMarcaExcel: 'https://faneroapi.azurewebsites.net/api/orden/ListarOrdenConMarcaExcel',
    ListarOrdenConMarca: 'https://faneroapi.azurewebsites.net/api/orden/ListarOrdenConMarca',
    CrearBanner: 'https://faneroapi.azurewebsites.net/api/banner/CrearBanners',
    EditarBanner: 'https://faneroapi.azurewebsites.net/api/banner/EditarBanners',
    ObtnerBanners: 'https://faneroapi.azurewebsites.net/api/banner/ObtenerBanners',

    MaracarPagoVentas: 'https://faneroapi.azurewebsites.net/api/Tienda/MarcarPagoVentas',
    ConteoOrdenConMarca: 'https://faneroapi.azurewebsites.net/api/Orden/ConteoOrdenConMarca',
    DetalleOrdenConMarca: 'https://faneroapi.azurewebsites.net/api/orden/DetalleOrdenConMarca',
    DetalleOrdenConMarcaPorOrden: 'https://faneroapi.azurewebsites.net/api/orden/DetalleOrdenConMarcaPorIdOrden?idOrden=',

    GuardarTienda: 'https://faneroapi.azurewebsites.net/api/tienda/AgregarTienda',
    existeEmail: 'https://faneroapi.azurewebsites.net/api/persona/ExisteEmail?email=',
    obtenerInformTienda: 'https://faneroapi.azurewebsites.net/api/Tienda/ObtenerInformacionTienda?IdTienda=',
    DocumentoRepLegal: 'https://faneroapi.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=',
    DocumentoRut: 'https://faneroapi.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=',
    DocumentoExtractoBancario: 'https://faneroapi.azurewebsites.net/api/Tienda/GuardarDocVerificacion?IdTienda=',
    ActivaCuentaAdmin: 'https://faneroapi.azurewebsites.net/api/persona/ActivaCuenta',
    obtenerInfoTiendaPorUsuario: 'https://faneroapi.azurewebsites.net/api/Tienda/ObtenerTienda?Usuario=',
    EstadoDocumento: 'https://faneroapi.azurewebsites.net/api/tienda/ObtenerVerificacionDocumentos?idtienda=',
  };
}
