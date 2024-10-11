#!/bin/bash

# Construir la imagen Docker
docker build -t nextjs-app .

# Ejecutar el contenedor Docker
docker run -d -p 3000:3000 --name nextjs-app nextjs-app
