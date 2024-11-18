# Usando a imagem oficial do PHP com Apache
FROM php:8.2.25-apache

# Instalando as dependências do PHP
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libwebp-dev \
    libxpm-dev \
    libfreetype6-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    bash \
    fcgiwrap \
    libmcrypt-dev \
    libonig-dev \
    libpq-dev \
    libssl-dev \
    && rm -rf /var/lib/apt/lists/*

# Habilitar PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install gd \
    && docker-php-ext-install pdo pdo_pgsql pgsql mbstring zip exif pcntl bcmath opcache

# Habilitar mod_rewrite do Apache
RUN a2enmod rewrite

# Instalar o Composer
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

# Copiar o arquivo php.ini para o diretório de configuração do PHP
COPY ./docker/php/php.ini /usr/local/etc/php/conf.d/

# Definir o diretório de trabalho
WORKDIR /var/www/html

# Copiar o código do projeto Laravel
COPY . .

# Definir permissões apropriadas para diretórios de cache e storage
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache 

# Configuração personalizada do Apache
COPY ./docker/apache/000-default.conf /etc/apache2/sites-available/000-default.conf

#User
USER www-data

# Expor a porta 80 para o Apache
EXPOSE 80

# Iniciar o Apache e PHP
CMD ["apache2-foreground"]