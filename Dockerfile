# Usamos una imagen base de Python
FROM python:3.9-slim

# Establecemos el directorio de trabajo en /app
WORKDIR /app

# Copiamos el archivo de dependencias
COPY requirements.txt .

# Instalamos las dependencias del proyecto
RUN pip install --no-cache-dir -r requirements.txt

# Copiamos todo el proyecto al contenedor
COPY . .

# Exponemos el puerto en el que Django correrá
EXPOSE 8000

# Ejecutamos las migraciones y luego el servidor de desarrollo de Django
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
