## Global node js packages

```bash
$ npm install -g yarn
$ npm install -g ts-node@10.5.0
$ npm install -g nodemon
$ npm install -g db-migrate
$ npm install -g db-migrate-pg
```

## Important!

Start redis, postgres container via docker-compose

```bash
# Start containers
$ docker-compose up -d
# Stop containers
$ docker-compose down
```

## Migrate database

Second create database chat_app in postgresql

```sql
CREATE DATABASE chat_app;
```

```bash
# Create tables
$ yarn up
# Delete tables
$ yarn down
```

## Environment

- need create .env file
- example: .env.sample

## Start project

```bash
$ yarn install
$ yarn dev
```

## Swagger documentation

- http://host:port/swagger

## Socket.io api

- ws://host:port/chat
  - Headers:
    - authorization
  - Events. Listen on connect.
    - msg_receive
    - error
  - Sending messages
    - Event send message:
      - msg_send
    - Event send file:
      - msg_send:file

## Examples socket.io api

Message send: type JSON

```json
{
  "room": "2d52e031-7039-48bb-8052-056649670bd1",
  "interlocutorId": 2,
  "message": "Hi, I'm Nha Tran"
}
```

Message receive: type JSON

```json
{
  "id": 10,
  "room": "2d52e031-7039-48bb-8052-056649670bd1",
  "date": "2022-08-09T09:55:22.753Z",
  "message": "Hi, I'm Nha Tran",
  "filePath": null,
  "from": 4,
  "to": 2
}
```

File send: type JSON

```json
{
  "room": "2d52e031-7039-48bb-8052-056649670bd1",
  "interlocutorId": 2,
  "file": "text file",
  "extension": "txt"
}
```

File receive: type JSON

```json
{
  "id": 9,
  "room": "2d52e031-7039-48bb-8052-056649670bd1",
  "date": "2022-08-09T08:15:59.816Z",
  "message": null,
  "filePath": "http://localhost:7980/files/a39d83eb-ad2d-4182-a270-5c576d29e340.txt",
  "from": 4,
  "to": 2
}
```
