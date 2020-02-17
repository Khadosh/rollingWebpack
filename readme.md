# Como Usar
Clonar el repositorio localmente
- git clone git@github.com:Khadosh/rollingWebpack.git
- cd rollingWebpack
- npm install
- npm run start

## Estructura de Carpetas
- public: unicamente el HTML
- src: todo lo demas (javascript, imagenes, css)

## Archivos Importantes
- webpack.config.js: Aqui van a encontrar toda la configuración de nuestro proyecto webpack. Actualmente tiene la capacidad de generar 3 bundles (html, css y js), procesar css, [scss](https://sass-lang.com/) y de manejar archivos dentro de los archivos de estilos usando file-loader en webpack.

## Scripts
Dentro de nuestro archivo Package.json vamos a encontrar una sección scripts, que contienen los siguientes:
- test
- build
- start

el que vamos a usar es el start xa darle a correr al proyecto.
