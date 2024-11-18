FROM php:8.2.25-apache

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

RUN docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install gd \
    && docker-php-ext-install pdo pdo_pgsql pgsql mbstring zip exif pcntl bcmath opcache

RUN a2enmod rewrite

COPY --from=composer/composer:latest-bin /composer /usr/bin/composer

COPY ./docker/php/php.ini /usr/local/etc/php/conf.d/

WORKDIR /var/www/html

COPY . .

RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache 

COPY ./docker/apache/000-default.conf /etc/apache2/sites-available/000-default.conf

USER www-data

EXPOSE 80

CMD ["apache2-foreground"]