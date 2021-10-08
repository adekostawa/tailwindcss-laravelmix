let mix = require('laravel-mix');

mix.js('src/app.js', 'js')
    .postCss('src/app.css', 'css',[
        require("tailwindcss"),
       ])
    .options({
        autoprefixer:{
            options: {
                browsers: [
                    "last 5 versions",
                ]
            }
        }
    })
    .setPublicPath('public');