# RAITE 2022 SPCF TEAM 1

## Setup Project
Make a copy of `.env` using the file `env.example` and then add your MySQL database credentials to establish a connection.

```
DB_CONNECTION=mysql
DB_HOST=<database host>
DB_PORT=<database port>
DB_DATABASE=<database name>
DB_USERNAME=<database username>
DB_PASSWORD=<database password>
```

After setting up the `.env` run the following commands:

0. `composer clear`
1. `composer install`
2. `composer dump-autoload`
3. `php artisan key:generate`
4. `php artisan optimize:clear`
5. `php artisan storage:link`
6. `npm i && npm run dev`
7. `php artisan serve`

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).