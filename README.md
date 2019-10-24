<h1 align="center">
  <img alt="Gympoint" title="Gympoint" src="./gympoint-logo.png" width="200px" />
</h1>

<h3 align="center">
  Bootcamp application
</h3>

<blockquote align="center">“Faça seu melhor, mas sempre com prazo de entrega”!</blockquote>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/RaphaelOliveiraMoura/gympoint-bootcamp?color=%2304D361">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/RaphaelOliveiraMoura/gympoint-bootcamp/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/RaphaelOliveiraMoura/gympoint-bootcamp?style=social">
  </a>
</p>

## Overview

This is a repository made in bootcamp gostack of [rocketseat](http://rocketseat.com.br).

This is a application ...

## Preparing and running application

> Cloning repository:

```shell
  ~ git clone https://github.com/RaphaelOliveiraMoura/gympoint-bootcamp.git
  ~ cd gympoint-bootcamp
```

> Instalando dependências:

```shell
  ~ yarn install
  or
  ~ npm install
```

> Setting database

To the database you need to have a SQL database remote or localy. At the moment all sensible variables is setted in the files (hard code), but for the future will be change to `environment variables`.

To setting the database configurations, change the `~/src/config/database.js` with your own configurations.

```javascript
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'gympoint',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
```

> Using docker

You can sett your database with docker, using the follow commands:

```shell
  ~ docker ...
```

## Documentation

There is a file called `insomnia.json` in the root of application, that is the exported documentation of [insomnia](https://insomnia.rest/).

Insomnia is a software similar to postman, you use that to test the requests to your application server side, seeing the response for each route with it params.
