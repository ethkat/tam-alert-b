## Alert Backend

## Setup [development]
```bash
git clone https://github.com/ethkat/tam-alert-b backend
touch .env # see below for .env example
yarn
```

### Configuration

#### Env

```bash
PORT=8080
ENV="development"
HOST="localhost"
MONGO_URL="mongodb://localhost:27017"
MONGO_DB_NAME="alert"
```

### Dev

```bash
 yarn dev # start server
```

### Build

```bash
 yarn build # serve build on /build folder
```

### Lint

```bash
 yarn lint # lint all the things
```
