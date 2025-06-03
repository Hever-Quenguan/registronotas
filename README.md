# RegistroNotas

**RegistroNotas** es una aplicación para gestionar calificaciones académicas de manera sencilla. Consta de un backend (servidor) que ofrece una API para guardar y consultar datos, y un frontend (sitio web) que permite a los usuarios interactuar con esos datos mediante formularios e interfaces amigables.

---

## Contenido

1. [¿Qué es RegistroNotas?](#qué-es-registronotas)
2. [Tecnologías principales](#tecnologías-principales)
3. [Estructura general](#estructura-general)
4. [Cómo empezar](#cómo-empezar)

   1. [Preparar el servidor (backend)](#preparar-el-servidor-backend)
   2. [Preparar la interfaz (frontend)](#preparar-la-interfaz-frontend)
5. [Cómo usar la aplicación](#cómo-usar-la-aplicación)
6. [Buenas prácticas básicas](#buenas-prácticas-básicas)

---

## ¿Qué es RegistroNotas?

RegistroNotas es un sistema que permite:

* Crear y administrar **estudiantes**, **profesores**, **cursos** y **clases**.
* Registrar **evaluaciones** (por ejemplo, exámenes) y asignar **notas** a cada estudiante.
* Consultar listados de estudiantes, cursos y calificaciones desde una interfaz web.
* Usar la aplicación en una red local o desplegarla en un servidor real.

La idea es que cualquier institución educativa pequeña (colegio, instituto, academia) pueda llevar el control de sus calificaciones de forma ordenada.

---

## Tecnologías principales

* **Backend (servidor)**:

  * [Python](https://www.python.org/) con [Django](https://www.djangoproject.com/)
  * Base de datos sencilla (PostgreSQL)
  * Uso de **Docker** para instalar en un contenedor sin complicaciones

* **Frontend (sitio web)**:

  * [Angular](https://angular.io/) (lenguaje TypeScript)
  * Interfaz moderna con formularios y tablas fáciles de usar

---

## Estructura general

Al descomprimir el proyecto, verás algo así:

```
registronotas/             ← Carpeta principal
├── registronotas/          ← Carpeta con backend y frontend
│   ├── Angular/            ← Código de la página web (frontend)
│   ├── Dockerfile          ← Instrucciones para crear el servidor (backend)
│   ├── docker-compose.yml  ← Levanta la base de datos y el servidor en contenedores
│   └── aplicacion/         ← Carpeta con el proyecto Django (servidor)
└── README.md               ← Este archivo de instrucciones
```

* **`aplicacion/`**: aquí vive el código que maneja los datos (estudiantes, cursos, notas). Se encarga de recibir peticiones, guardar información en la base de datos y responder con datos en formato JSON.
* **`Dockerfile` y `docker-compose.yml`**: permiten levantar el servidor y la base de datos con un solo comando, sin instalar nada manualmente.
* **`Angular/`**: contiene el sitio web que se conecta al servidor para mostrar los datos y permitir al usuario registrar información.

---

## Cómo empezar

### Preparar el servidor (backend)

1. **Instalar Docker y Docker Compose** (si no los tienes).

   * Sigue las instrucciones en [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/)

2. **Entrar a la carpeta del servidor**:

   ```bash
   cd registronotas/registronotas  # Igual al directorio donde está docker-compose.yml
   ```

3. **Configurar variables básicas**:

   * Crea un archivo llamado `.env` dentro de `aplicacion/` con esto mínimo:

     ```text
     SECRET_KEY=una_clave_secreta_cualquiera
     DEBUG=True
     DATABASE_URL=postgres://postgres:1234@db:5432/notas
     ```
   * **SECRET\_KEY** sirve para seguridad interna. Puedes poner cualquier texto largo.
   * **DEBUG=True** permite ver errores detallados mientras desarrollas. En producción se pondría `False`.
   * **DATABASE\_URL** indica que usará la base de datos PostgreSQL dentro de Docker.

4. **Levantar contenedores**:

   ```bash
   docker-compose up -d
   ```

   * Esto descargará y ejecutará dos contenedores:

     * **`db`**: servidor de base de datos PostgreSQL.
     * **`web`**: servidor Django que atiende la API.

5. **Crear la base de datos**:
   Una vez que los contenedores estén corriendo (verifica con `docker ps`), ejecuta:

   ```bash
   docker-compose exec web python manage.py migrate
   ```

   Esto creará las tablas necesarias para guardar estudiantes, cursos, evaluaciones y notas.

6. **Crear un usuario administrador** (opcional, para ingresar a un panel especial):

   ```bash
   docker-compose exec web python manage.py createsuperuser
   ```

   * Ingresa un nombre de usuario, correo y contraseña cuando te lo pida.

7. **Probar que funciona**:

   * En tu navegador, ve a `http://localhost:8000/admin/`

     * Ingresa con el usuario que creaste.
     * Verás diferentes opciones: Estudiantes, Profesores, Cursos, Clases, Evaluaciones, Notas.
   * O visita `http://localhost:8000/swagger/` para ver una lista de direcciones (endpoints) que ofrece el servidor. Ahí puedes probar enviar datos y ver respuestas.

---

### Preparar la interfaz (frontend)

1. **Instalar Node.js y npm** (si no los tienes):

   * Descárgalos en [https://nodejs.org/](https://nodejs.org/).

2. **Ir a la carpeta del frontend**:

   ```bash
   cd Angular
   ```

3. **Instalar dependencias**:

   ```bash
   npm install
   ```

   * Esto descarga todas las librerías necesarias para que Angular funcione.

4. **Configurar la dirección del backend**:

   * Abre `src/environments/environment.ts` y verifica que diga:

     ```ts
     export const environment = {
       production: false,
       apiUrl: 'http://localhost:8000/api'
     };
     ```
   * Esto indica al sitio web dónde buscar la información.

5. **Levantar el sitio web**:

   ```bash
   npm start
   ```

   * Al terminar de compilar, abre tu navegador en `http://localhost:4200/`.
   * Verás una página con menús que, por ahora, muestran ejemplos. Usaremos esto para crear páginas de Estudiantes, Cursos, Notas, etc.

---

## Cómo usar la aplicación

La aplicación ya incluye un frontend completamente funcional disponible en:

```
http://localhost:4200/
```

Solo necesitas asegurarte de que el servidor (backend) esté corriendo en `http://localhost:8000/` para que la página web pueda comunicarse con él. A continuación, se detalla cómo navegar y comenzar a usarla:

1. **Abrir la interfaz web**

   * En tu navegador, ve a `http://localhost:4200/`.
   * Verás el menú principal con opciones para **Estudiantes**, **Profesores**, **Cursos**, **Clases**, **Evaluaciones** y **Notas**.

2. **Autenticación**

   * la aplicación requiere inicio de sesión, aparecerá un formulario de ingreso. Ingresa con tus credenciales para acceder a todas las funcionalidades.

3. **Navegar por secciones**

   * **Estudiantes**:

     * Verás una lista de todos los estudiantes registrados.
     * Haz clic en "Agregar" para crear uno nuevo o en el ícono de edición para modificar datos existentes.
     * También dispones de un ícono de papelera para eliminar un estudiante.

   * **Profesores**:

     * Funciona igual que Estudiantes, con opciones para listar, crear, editar y eliminar profesores.

   * **Cursos**:

     * Lista de cursos disponibles.
     * Crea un nuevo curso con su nombre y código, o edita uno ya existente.

   * **Clases**:

     * Cada clase está asociada a un curso.
     * Al ingresar a esta sección, selecciona primero el curso (si la aplicación lo solicita), luego verás las clases asociadas.
     * Crea o edita clases especificando nombre y horario.

   * **Evaluaciones**:

     * Aquí podrás ver o crear exámenes, tareas o actividades calificables.
     * Al crear una evaluación, elige la clase correspondiente, define fecha y porcentaje de ponderación.

   * **Notas**:

     * Es la sección donde finalmente asignas calificaciones a los estudiantes.
     * Para agregar una nota, selecciona el estudiante y la evaluación, e ingresa la calificación numérica.
     * Podrás ver, editar o eliminar cualquier nota existente.

4. **Guardar y refrescar**

   * Cada vez que realices una operación (crear, editar o eliminar), la lista se actualizará automáticamente o, si es necesario, puedes recargar la página para ver los cambios.

5. **Panel de administración avanzado (opcional)**

   * Si creaste un usuario administrador en el backend, puedes ir a `http://localhost:8000/admin/`.
   * Desde ese panel podrás ver todos los modelos (Estudiantes, Cursos, etc.) de forma directa, aunque no es obligatorio para el uso diario.

Con estos pasos, cualquier persona puede **modificar notas, cursos o datos de estudiantes y profesores** sin necesidad de tocar código. La interfaz web está diseñada para ser intuitiva y completa.

* **Mantener en desarrollo (DEBUG=True)** hasta probar todo. Cuando vayas a subir a un servidor real, cambia a `DEBUG=False` y ajusta `ALLOWED_HOSTS` a tu dominio.
* **No subir archivos .env a repositorios públicos**. Ahí van tus claves y contraseñas.
* **Consultar primero en Swagger (`/swagger/`)** si no sabes qué información necesita cada pedido. Ahí se muestran ejemplos fáciles.
* **Si algo no funciona**: revisa si los contenedores Docker siguen activos (`docker ps`), que la dirección `apiUrl` en Angular sea correcta y que hayas aplicado migraciones (`migrate`).
* **Para el frontend**, puedes usar estilos simples (Bootstrap, Tailwind o Angular Material) solo para que los formularios y tablas se vean agradables.

---

**¡Y listo!** Ahora tienes todo lo necesario para entender y usar RegistroNotas. Con estos pasos, cualquier persona que tenga nociones básicas de computadora podrá:

1. Levantar el servidor con Docker.
2. Crear datos académicos desde el panel de Django.
3. Ver y manejar esos datos desde el sitio Angular.

Si necesitas ayuda adicional o quieres incluir gráficos y reportes avanzados, solo visita `/swagger/` para conocer todos los detalles de la API. ¡Éxito!
