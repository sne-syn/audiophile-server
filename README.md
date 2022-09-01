# audiophile-server

Readme for local development on the Audiophile-server application.

## Installation

Required Dependencies:

```sh
node
yarn
PostgresSQL or Docker
```

Clone the repo locally

```sh
git clone git@github.com:sne-syn/audiophile-server.git
cd audiophile-server
```

### Database

Create a local MySQL database, e.g `test`

Match up your config in `.env` to match your database settings. Use .env.example

```sh
DATABASE_URL="postgresql://postgres:ADD_YOUR_PASSWORD_HERE@localhost:HOST/YOUR_DATABASE_NAME"
```

### Yarn

Run yarn

```sh
yarn
```

### Populate database

Run migrations

```sh
yarn prisma migrate dev
```


## Run application

Lets start the engine

```sh
yarn run devStart
```

### Run prisma studio

Use UI to view and edit your application data
```sh
yarn prisma studio
```

Then go to

- http://localhost:5555/ (on Chrome only)

## External packages and guides used for this setup

- https://www.prisma.io
