Descripción del Proyecto: API REST de Registro Académico con Django y PostgreSQL

Este proyecto consiste en una API REST desarrollada con Django y PostgreSQL que permite gestionar un sistema de registro académico para un entorno educativo. La API está diseñada para administrar registros relacionados con estudiantes, profesores, clases, cursos, evaluaciones, notas, asistencias y tipos de documentos. El sistema utiliza llaves foráneas y llaves primarias para establecer relaciones entre las tablas, garantizando una integridad referencial y un manejo eficiente de los datos.

Tablas y Funcionalidad
Notas

La tabla Notas almacena las calificaciones de los estudiantes. Cada nota está asociada a un estudiante y a una evaluación, mediante llaves foráneas que permiten identificar qué estudiante obtuvo qué calificación en una evaluación específica.

Cursos

La tabla Cursos gestiona los cursos ofrecidos en la institución, incluyendo el nombre del curso y su descripción. Un curso puede estar vinculado a varias clases.

Clases

La tabla Clases representa las sesiones de los cursos. Cada clase está vinculada a un profesor y a un curso específico, lo que permite gestionar de manera eficiente las actividades educativas.

Asistencia

La tabla Asistencia lleva el control de la presencia de los estudiantes en cada clase. Los registros de asistencia están relacionados con un estudiante y una clase, permitiendo saber si un estudiante estuvo presente o ausente en una clase determinada.

Profesor

La tabla Profesor almacena información sobre los profesores, como su nombre, apellido, dirección, teléfono, tipo de documento y especialidad. Los profesores pueden impartir varias clases en distintos cursos.

Estudiante

La tabla Estudiantes contiene los datos personales de los estudiantes, como su nombre, apellido, correo electrónico, dirección, teléfono, tipo de documento (referenciado mediante la tabla TipoDocumento) y fecha de nacimiento.

TipoDocumento

La tabla TipoDocumento gestiona los diferentes tipos de documentos con los que los estudiantes y profesores se identifican (por ejemplo, cédula de identidad, pasaporte, etc.). Esta tabla está relacionada con la tabla Estudiantes y Profesor mediante llaves foráneas.

Evaluación

La tabla Evaluación representa las pruebas o exámenes realizados en las clases. Cada evaluación está asociada a una clase y tiene información como el título, la descripción, la fecha y la ponderación de la evaluación.

Relacionamiento entre las Tablas
Las tablas están fuertemente relacionadas entre sí a través de llaves primarias y llaves foráneas:

Los estudiantes tienen registros de asistencia en las clases.

Las notas se asignan a estudiantes y evaluaciones específicas, creando una relación entre estos dos elementos.

Las evaluaciones se asignan a clases, lo que conecta la evaluación con la clase correspondiente.

Los profesores imparten clases y cada clase está vinculada a un curso.

Este sistema está diseñado para almacenar y manejar de manera eficiente todos los datos relevantes en el ámbito académico, garantizando la integridad de la información mediante las relaciones de llaves foráneas y primarias.




Instrucciones para Ejecutar la Aplicación Django con Docker

## 1. Asegúrate de tener Docker corriendo

- Si estás usando **Docker Desktop** (en Windows o Mac), abre Docker Desktop y asegúrate de que esté corriendo.
- Si estás en **Linux**, verifica que Docker esté corriendo con el siguiente comando:


   sudo systemctl status docker


## 2. Navega al Directorio de tu Proyecto

Abre la terminal o línea de comandos y navega al directorio donde tienes tu proyecto con el archivo `docker-compose.yml`.


cd registronotas


## 3. Levantar los Contenedores con Docker Compose

Una vez en el directorio de tu proyecto, usa Docker Compose para iniciar los contenedores. Esto ejecutará tu aplicación Django dentro de un contenedor, así como la base de datos u otros servicios que hayas configurado.

docker-compose up -d


- `-d` hace que los contenedores se ejecuten en segundo plano.
- Esto descargará y levantará las imágenes de Docker definidas en tu archivo `docker-compose.yml`.

## 4. Verificar que los Contenedores estén Corriendo

Después de levantar los contenedores, puedes verificar que todo está funcionando correctamente con el siguiente comando:


docker-compose ps


Este comando te mostrará una lista de contenedores en ejecución. Deberías ver algo similar a:

```
Name                        Command               State          Ports
----------------------------------------------------------------------
django_api_web_1            "python3 manage.py r…"   Up             0.0.0.0:8001->8000/tcp
django_api_db_1             "docker-entrypoint.s…"   Up             5432/tcp
```

## 5. Acceder a la Aplicación en el Navegador

Una vez que los contenedores estén corriendo, abre tu navegador y accede a tu aplicación Django:

- **Aplicación Django**:  
  ```

  http://localhost:8001/swagger/
  ```

- **Panel de Administración de Django (si es necesario)**:  
  ```
  http://localhost:8001/admin
  ```

## 6. Aplicar Migraciones (si es necesario)

Si realizaste cambios en los modelos de tu aplicación y necesitas aplicar migraciones de base de datos, puedes hacerlo ejecutando el siguiente comando dentro del contenedor `web`:


docker-compose exec web python manage.py migrate
```

## 7. Detener los Contenedores

Si deseas detener los contenedores en cualquier momento, puedes usar el siguiente comando:


docker-compose down
```

Esto detendrá los contenedores, pero no eliminará los datos. Si quieres detener los contenedores y eliminar todo (incluyendo las redes y volúmenes), puedes usar:


docker-compose down --volumes --remove-orphans
```

## Resumen

Cada vez que apagues y enciendas tu computadora, estos son los pasos que debes seguir para volver a ejecutar tu aplicación:

1. Asegúrate de que Docker esté corriendo.
2. Navega a tu directorio de proyecto:

   cd registronotas
   ```

3. Levanta los contenedores con:

   
   docker-compose up -d
   ```

4. Accede a tu aplicación en el navegador en `http://localhost:8001`.

5. (Opcional) Si es necesario, aplica las migraciones con:

   docker-compose exec web python manage.py migrate
   ```

¡Listo! Eso debería poner tu aplicación Django contenerizada en Docker en marcha cada vez que la necesites ejecutar después de reiniciar tu máquina.

