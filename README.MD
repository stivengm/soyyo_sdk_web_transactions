

# Creación y configuración del proyecto Webpack - React


Ejecutar el siguiente comando para crear el archivo package.json
```sh
git init -y
```

Creación de estructuras de carpetas, se recomienda dejarlo en `src/index.js`

## Instalación de WebPack
Ejecutar el siguiente comando para instalar WebPack:
```sh
npm install webpack webpack-cli --save-dev
```

Crear script para la creación del build.
> "build": "webpack --mode=development"

## Instalación de React
Ejecutar el siguiente comando para instalar React:
```sh
npm install react react-dom -E
```

## Instalación de Babel
Ejecutar el siguiente comando para instalar Babel, este funciona para poder entender los archivos de React.
```sh
npm install @babel/core babel-loader @babel/preset-react --save-dev
```

## Instalación de style-loader y css-loader
Ejecutar el siguiente comando para instalar style-loader y css-loader, este funciona para poder entender los archivos css y los pueda cargar en JS.
```sh
npm install style-loader css-loader --save-dev
```