# TypeScript template repo

Includes:
* TypeScript
* Jest
* ESLint (with some plugins preconfigured)
* Express
* Typeorm
* Winston logger

## Steps to run this project

1. Run `yarn` command
2. Setup database settings inside `ormconfig.json` and `docker-compose.yml` file
3. Copy .env.example to .env `cp .env.example .env`
3. Run `docker-compose up -d`
4. Run `yarn start` command

## Tests

Run all tests
```
yarn test
```

Run unit tests
```
yarn unit
```

Run integration tests
```
yarn integration
```
