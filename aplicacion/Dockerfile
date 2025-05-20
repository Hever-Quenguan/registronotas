# Usar una imagen base de Python
FROM python:3.12.6

# Instalar certificados del sistema para evitar errores SSL
RUN apt-get update && apt-get install -y ca-certificates && rm -rf /var/lib/apt/lists/*

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY . .

# Actualizar pip, setuptools y wheel
RUN pip install --upgrade pip setuptools wheel

# Instalar dependencias del proyecto, evitando errores SSL con --trusted-host (solo si es necesario)
RUN pip install --no-cache-dir \
    --trusted-host pypi.org \
    --trusted-host files.pythonhosted.org \
    -r requirements.txt

# Exponer el puerto en el que correrá Django
EXPOSE 8000

# Crear un script de inicio para aplicar migraciones y luego iniciar el servidor
CMD ["sh", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]

