## Description

Card Deck API is build with Nest.js

## Setting Up

* Setup Postgres Container
```bash
$ docker-compose up -d
```

```bash
$ npm install
```

* Setup DB Schema
```bash
$ npm run schema:sync
```

* Seed Data
```bash
$ npm run seed:run
```

## Running the app

* Click Debug in VS Code to Run
* Open `http://localhost:3000/api/` for Swagger or
* Call `http://localhost:3000/` through Postman