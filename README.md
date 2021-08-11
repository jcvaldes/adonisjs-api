# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```


npm i -g @adonisjs/cli

# Ayuda

```
adonis --help
adonis new --help
```

# crear proyectos

```
npm init adonis-ts-app@latest hello-world

adonis new [proyecto]
adonis new [proyecto] --api-only
adonis new [proyecto] --blueprint
```

# Crear controllers

```
adonis make:controller User
```

crea todos los métodos 

```
adonis make:controller User --resource 
```

# Iniciar servidor

```
adonis serve --dev
```


