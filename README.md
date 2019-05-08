# Customer Control

> base project.

## Project files

```text
|--- app
|    |--- backend
|         ---| dist
|         ---  src
|         ---  .editoconfig
|         ---  .env
|         ---  .gitignore
|         ---  .package-lock.json
|         ---  .package.json
|         ---  .tsconfig.json
|         ---  .tslint.json
|    |---frontend
|        --- src
|        --- .gitignore
|        --- main.js
|        --- package.json
|        --- tsconfig.json
```

## Installation

- requires [Node.js](https://nodejs.org/) to run.
- requires [MongoDB](https://www.mongodb.com/) to run.

`Install TypeScript`

```bash
$ npm install -g typescript
```

`Install backend dependencies`

```bash
$ cd backend
$ npm i
```

`Configure backend .env`

```bash
$ touch .env
```

```text
PORT=8080
DB_HOST=localhost:27017
DB=customer_db
```

`Install frontend dependencies`

```bash
$ cd frontend
$ yarn or npm i, prefer yarn
```

## Running project

`Backend`

```bash
$ cd backend
```

| Action                    | Usage          |
| ------------------------- | -------------- |
| Starting development mode | `npm run dev`  |
| Starting production mode  | `npm run prod` |

`Frontend`

```bash
$ cd frontend
```

| Action                    | Usage              |
| ------------------------- | ------------------ |
| Starting development mode | `npm run start`    |
| Make production build     | `npm run build`    |
| Running Test              | `npm t`            |
| Running Coverage          | `npm run coverage` |

## Development

#### Clone the repo

```bash
$ git clone https://github.com/AlbericoD/customer-manager-system.git
```

### Run project dev

```bash
# Change into directory
$ cd app

# run backend
$ init mongodb service
$ cd backend
$ npm run dev

# run frontend
$ cd frontend
$ npm start or yarn start
```

## Author

[Albérico Dias Barreto Filho](https://www.linkedin.com/in/albericod/)
