FROM php:8.2-fpm-alpine

# Instalar dependencias y la extensión pdo_pgsql
RUN apk update && apk add --no-cache \
    git \
    unzip \
    curl \
    libpq-dev \
    zip \
    dos2unix \
    bash \
    && docker-php-ext-install pdo pdo_pgsql

# Instalar Composer (se copia desde la imagen oficial)
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Establecer el directorio de trabajo
WORKDIR /var/www
