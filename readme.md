# Chisel Todo App

## Notes on running the app.

### Server

1. setup postgres & nestjs
2. Create .env and update the variables.
3. Run the server

```bash
npm start
```

4. signup to the app!

```bash
# Example:
curl --location 'localhost:4000/auth/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "firstName": "Company",
    "lastName": "Chisel",
    "email": "company@chisel.com",
    "password": "chi#sel@company121"
}'
```

5. Use the `auth_token` in client to make api calls.

### Client

1. Create .env file and update the variables
2. Run the app!

```bash
npm start
```

## Environment Variables

### Client

```
# src/.env

REACT_APP_SERVER_BASE_URL=
REACT_APP_AUTH_TOKEN=
```

### Server

```
# src/.env

DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_DIALECT=
DB_NAME=
JWT_SECRET=
HASH_SALT=
PORT=
```
