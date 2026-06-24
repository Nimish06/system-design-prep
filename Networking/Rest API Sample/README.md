# REST API Sample

A simple REST API built with Express.js demonstrating standard CRUD operations on a Todos resource.

## What This Covers

- Setting up an Express.js server
- Implementing GET, POST, PUT, DELETE endpoints
- Handling route parameters and request body parsing
- Standard REST response patterns

## Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/todos` | Get all todos |
| POST | `/todos` | Add a new todo |
| PUT | `/todos/:id` | Update a todo by ID |
| DELETE | `/todos/:id` | Delete a todo by ID |

## Setup & Run

```bash
npm install
node index.js
```

Server starts at `http://localhost:5111`

## Sample Requests

**Get all todos:**
```bash
curl http://localhost:5111/todos
```

**Add a new todo:**
```bash
curl -X POST http://localhost:5111/todos \
  -H "Content-Type: application/json" \
  -d '{"id": 4, "title": "Study GraphQL", "completed": false}'
```

**Update a todo:**
```bash
curl -X PUT http://localhost:5111/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Buy groceries", "completed": true}'
```

**Delete a todo:**
```bash
curl -X DELETE http://localhost:5111/todos/1
```

## Tech Stack

- Node.js
- Express.js
- body-parser
