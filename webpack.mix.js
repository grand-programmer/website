const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    stats: {
        children: true
    }
})
mix.js('resources/js/app.js', 'public/js/mix')
    .vue()
    .sass('resources/sass/app.scss', 'public/css/mix')
    .sass('public/css/one.scss', 'public/css/mix/one.css')
    .sass('public/css/vacancy.scss', 'public/css/mix/vacancy.css')
    .sass('public/css/style.scss', 'public/css/style.css')
    .sass('public/css/services.scss', 'public/css/services.css');

