# RegistroNotas

**RegistroNotas** es una plataforma completa de gestión académica que permite administrar estudiantes, profesores, cursos, clases, asistencias, evaluaciones y notas. Está desarrollada con Django REST Framework en el backend y Angular en el frontend, y se encuentra completamente contenerizada con Docker para facilitar su despliegue.

---

## Tabla de Contenidos

1. [Descripción del proyecto](#descripción-del-proyecto)
2. [Tecnologías utilizadas](#tecnologías-utilizadas)
3. [Estructura del proyecto](#estructura-del-proyecto)
4. [Requisitos previos](#requisitos-previos)
5. [Instalación y ejecución](#instalación-y-ejecución)

   * [a. Versión con Docker (recomendada)](#a-versión-con-docker-recomendada)
   * [b. Versión sin Docker (desarrollo local)](#b-versión-sin-docker-desarrollo-local)
6. [Uso de la aplicación](#uso-de-la-aplicación)
7. [Documentación de la API](#documentación-de-la-api)
8. [Estructura de las entidades](#estructura-de-las-entidades)
9. [Desarrollo y migraciones](#desarrollo-y-migraciones)
10. [Contacto y soporte](#contacto-y-soporte)

---

## Descripción del proyecto

RegistroNotas es una solución integral para la administración académica en entornos educativos. Permite registrar y gestionar:

* **Estudiantes**: datos personales, tipo y número de documento, curso asignado, etc.
* **Profesores**: información de los docentes.
* **Cursos**: definición de materias o programas académicos.
* **Clases**: instancias de cursos asignados a profesores con fechas y horarios.
* **Asistencias**: registro diario de presencia de estudiantes en cada clase.
* **Evaluaciones**: tipos de pruebas (examen, quiz, proyecto), fechas y peso en la nota final.
* **Notas**: calificaciones de estudiantes en cada evaluación.
* **Tipos de Documento**: normalización de la identificación (cédula, pasaporte, etc.).

El backend se encarga de exponer una API RESTful con todos los endpoints CRUD, mientras que el frontend Angular ofrece una interfaz web moderna donde los usuarios (administradores, profesores, secretarios académicos) pueden interactuar con los datos fácilmente.

La autenticación se gestiona mediante Keycloak, garantizando seguridad y control de acceso a cada recurso.

---

## Tecnologías utilizadas

* **Backend**:

  * Python 3.10+
  * Django 4.x
  * Django REST Framework
  * PostgreSQL (o MariaDB en configuración alternativa)
  * Keycloak (autenticación/Autorización)
  * Docker, Docker Compose

* **Frontend**:

  * Node.js 16+ / NPM 8+
  * Angular 14+
  * RxJS
  * Bootstrap 5 (o Material Design)
  * Nginx (para servir la aplicación estática en producción)
  * Docker

* **Documentación**:

  * OpenAPI / Swagger (archivo `openapi.yaml`)

---

## Estructura del proyecto

```
registronotas/
├── Angular/                    # Carpeta del frontend Angular
│   ├── Dockerfile              # Dockerfile para producción del frontend
│   ├── nginx.conf              # Configuración de Nginx para servir Angular en producción
│   ├── package.json
│   ├── src/                    # Código fuente de Angular
│   │   ├── app/                # Componentes, servicios y rutas de la app
│   │   ├── assets/
│   │   ├── environments/
│   │   └── index.html
│   └── tsconfig.json
├── aplicacion/                 # Carpeta del backend Django
│   ├── api/                    # App Django con modelos, serializadores y vistas
│   │   ├── tablas/             # Definición de modelos (TipoDocumento, Estudiantes, Profesor, Curso, Clase, Asistencia, Evaluación, Nota)
│   │   ├── serializers/        # Serializadores para cada modelo
│   │   ├── views.py            # Vistas CRUD para cada entidad
│   │   └── urls.py             # Rutas de la API (prefijo `/api/`)
│   ├── aplicacion/             # Proyecto Django (settings, URLs globales, WSGI)
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── Dockerfile              # Dockerfile para el backend Django
│   ├── docker-compose.yml      # Orquesta backend (web), base de datos y Keycloak
│   ├── manage.py
│   ├── openapi.yaml            # Especificación OpenAPI de la API REST
│   ├── requirements.txt        # Dependencias Python
│   ├── .env (opcional)         # Variables de entorno (SECRET_KEY, DB, Keycloak)
│   └── keycloak.txt            # Instrucciones para configurar Keycloak
└── docker-compose.yml          # Orquestador global (puede incluir web, db, keycloak, front)
```

* El archivo `docker-compose.yml` en la raíz suele orquestar todos los servicios: backend (`web`), base de datos (`db`), Keycloak, frontend (`frontend`, que a su vez se apoya en un contenedor Nginx).
* El `openapi.yaml` contiene la documentación de todos los endpoints de la API, con esquemas de request/response.
* Cada carpeta `Dockerfile` define la imagen para el servicio correspondiente.

---

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados:

* **Docker** ≥ 23.x
* **Docker Compose** ≥ 2.x

*(Si prefieres desarrollo local fuera de contenedores, necesitarás `python3`, `pip`, `virtualenv`, `nodejs` y `npm`).*

---

## Instalación y ejecución

### a. Versión con Docker (recomendada)

1. **Clonar o descomprimir** el repositorio en tu equipo:

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd registronotas
   ```

2. **Construir y levantar** todos los servicios con Docker Compose:

   ```bash
   docker-compose up -d
   ```

   Esto hará que se levanten:

   * El **backend Django** (`web`), escuchando en el puerto 8000.
   * El **servicio de base de datos** (`db`; PostgreSQL por defecto).
   * El **servidor Keycloak** (`keycloak`), normalmente en el puerto 8080.
   * El **frontend Angular** y **Nginx** (`frontend`), sirviendo la app en el puerto 80.

3. Espera unos segundos a que los contenedores inicien correctamente. Verifica el estado con:

   ```bash
   docker ps
   ```

4. **Aplicar migraciones y crear superusuario** en Django:

   ```bash
   docker-compose exec web bash
   # Dentro del contenedor web:
   python manage.py migrate
   python manage.py createsuperuser
   exit
   ```

   * Ingresa los datos solicitados (correo, contraseña) para tu usuario administrativo.

5. **Acceder a la aplicación** en tu navegador:

   * **Frontend**: `http://localhost/` (puerto 80). Alternativamente, si el contenedor Nginx no está configurado, `http://localhost:4200`.
   * **Backend (API)**: `http://localhost:8000/api/`.
   * **Swagger UI**: `http://localhost:8000/swagger/` o `http://localhost:8000/redoc/` (según configuración en `openapi.yaml`).
   * **Keycloak**: `http://localhost:8080/` (portal de administración de Keycloak).

---

### b. Versión sin Docker (desarrollo local)

> *Solo para fines de desarrollo o debugging. Para producción, usa Docker.*

#### Backend Django

1. En tu terminal, ve a la carpeta del backend:

   ```bash
   cd registronotas/aplicacion
   ```

2. Crea y activa un entorno virtual:

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Instala las dependencias Python:

   ```bash
   pip install -r requirements.txt
   ```

4. Crea el archivo de variables de entorno `.env` a partir de un ejemplo (si existe). Ejemplo:

   ```bash
   cp .env.example .env
   ```

   Edita `.env` y asigna tus valores para:

   * `SECRET_KEY`: clave secreta de Django.
   * `DB_NAME`, `DB_USER`, `DB_PASSWORD`, `DB_HOST`, `DB_PORT`: datos de la base de datos PostgreSQL/MariaDB.
   * `KEYCLOAK_URL`, `KEYCLOAK_REALM`, `KEYCLOAK_CLIENT_ID`: configuración de Keycloak.

   Si no usarás Keycloak en local, puedes deshabilitar la autenticación en `settings.py`.

5. Aplica migraciones y crea un superusuario:

   ```bash
   python manage.py migrate
   python manage.py createsuperuser
   ```

6. Inicia el servidor Django en modo desarrollo:

   ```bash
   python manage.py runserver 8000
   ```

7. Verifica que la API esté activa en `http://localhost:8000/api/` y que la documentación Swagger esté en `http://localhost:8000/swagger/`.

#### Frontend Angular

1. Abre otra terminal y ve a la carpeta del proyecto Angular:

   ```bash
   cd registronotas/Angular
   ```

2. Instala dependencias con npm (o yarn):

   ```bash
   npm install
   ```

3. Edita `src/environments/environment.ts` (y `environment.prod.ts`) para ajustar la URL base del API, por ejemplo:

   ```ts
   export const environment = {
     production: false,
     apiUrl: 'http://localhost:8000/api/'
   };
   ```

4. Inicia el servidor de desarrollo de Angular:

   ```bash
   ng serve
   ```

   La aplicación se levantará en `http://localhost:4200/`.

5. Accede en tu navegador a `http://localhost:4200` y prueba la interfaz: alta de estudiantes, cursos, registro de asistencias, calificación de evaluaciones, etc.

---

## Uso de la aplicación

1. **Registro y autenticación**

   * la aplicación está integrada con Keycloak, dirígete a `http://localhost:8080/` (Keycloak) y verifica que exista el cliente correspondiente (por ejemplo, `registro-notas-client`).
   * Crea usuarios y asigna roles (por ejemplo, `admin`, `profesor`, `secretario`).
   * Al ingresar en el frontend, serás redirigido al login de Keycloak para autenticar.

2. **Navegación principal**

   * **Estudiantes**: Lista, alta, edición y eliminación de alumnos.
   * **Profesores**: Gestión de datos de docentes.
   * **Cursos**: Definición y administración de cursos.
   * **Clases**: Asignación de profesores a cursos y horarios.
   * **Asistencias**: Marcar la asistencia diaria de los estudiantes.
   * **Evaluaciones**: Creación de exámenes, quizzes, proyectos.
   * **Notas**: Asignar y consultar calificaciones por estudiante y evaluación.

3. **Interfaz Angular**

   * Formulario de login (Keycloak).
   * Menú lateral o superior con las secciones: Estudiantes, Profesores, Cursos, Clases, Asistencias, Evaluaciones, Notas.
   * Tablas con paginación y filtros.
   * Formularios con validación de datos.
   * Mensajes de error y confirmaciones de acciones (por ejemplo, “¿Estás seguro de eliminar?”).

4. **API REST**

   * Cada recurso cuenta con endpoints CRUD:

     * `GET /api/estudiantes/` → listar todos.
     * `POST /api/estudiantes/` → crear.
     * `GET /api/estudiantes/{id}/` → detalle.
     * `PUT /api/estudiantes/{id}/` → actualizar.
     * `DELETE /api/estudiantes/{id}/` → eliminar.
   * Análogamente para `profesores`, `cursos`, `clases`, `asistencias`, `evaluaciones`, `notas`, `tipodocumentos`.
   * Las solicitudes requieren token JWT en el header `Authorization: Bearer <token>`.

---

## Documentación de la API

La especificación OpenAPI se encuentra en **`aplicacion/openapi.yaml`**. Para explorar la documentación de forma interactiva:

1. Accede a la ruta Swagger UI (si está configurada):

   * `http://localhost:8000/swagger/`
   * O bien, instala el cliente Swagger localmente e importa `openapi.yaml`.

2. Verás todos los endpoints agrupados por recurso, con ejemplos de request/response y esquemas JSON.

---

## Estructura de las entidades

A grandes rasgos, las tablas/modelos en `aplicacion/api/tablas/` son:

1. **TipoDocumento**:

   * `id` (PK)
   * `nombre` (e.g., Cédula, Pasaporte)

2. **Estudiantes**:

   * `id` (PK)
   * `nombre`, `apellido`
   * `tipo_documento` (FK a TipoDocumento)
   * `numero_documento`
   * `fecha_nacimiento`
   * `email`, `telefono`
   * `curso` (FK a Curso)

3. **Profesor**:

   * `id` (PK)
   * `nombre`, `apellido`
   * `area_especialidad`

4. **Curso**:

   * `id` (PK)
   * `nombre`, `descripcion`
   * `creditos`

5. **Clase**:

   * `id` (PK)
   * `curso` (FK a Curso)
   * `profesor` (FK a Profesor)
   * `fecha_inicio`, `fecha_fin`
   * `horario`

6. **Asistencia**:

   * `id` (PK)
   * `estudiante` (FK a Estudiantes)
   * `clase` (FK a Clase)
   * `fecha`
   * `estado` (Presente, Ausente, Justificado)

7. **Evaluación**:

   * `id` (PK)
   * `curso` (FK a Curso)
   * `tipo_evaluacion` (e.g., Examen, Quiz, Proyecto)
   * `fecha_programada`
   * `peso` (porcentaje en la nota final)

8. **Nota**:

   * `id` (PK)
   * `estudiante` (FK a Estudiantes)
   * `evaluacion` (FK a Evaluación)
   * `valor` (numérico o escala)

---

## Desarrollo y migraciones

Si deseas agregar nuevos campos o modificar modelos:

1. Edita el modelo correspondiente en `aplicacion/api/tablas/<modelo>.py`.
2. Genera una nueva migración:

   ```bash
   docker-compose exec web python manage.py makemigrations
   ```
3. Aplica la migración:

   ```bash
   docker-compose exec web python manage.py migrate
   ```
4. Si cambias la API (por ejemplo, nuevos campos o endpoints), actualiza el archivo `openapi.yaml` para reflejar los cambios.
5. En el frontend Angular, ajusta los servicios en `Angular/src/app/services/…` y actualiza componentes/formularios para incorporar nuevos campos.

---


