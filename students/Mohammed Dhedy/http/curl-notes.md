# Curl Notes — Day 15

## 1. GET request (200)

**Command:**
\`\`\`bash
curl https://jsonplaceholder.typicode.com/todos/1
\`\`\`

**Response:**
- Status: `200 OK`
- Body:
\`\`\`json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
\`\`\`

---

## 2. POST request with JSON body (201)

**Command:**
\`\`\`bash
curl -X POST -H "Content-Type: application/json" -d '{"title":"study","completed":false}' https://jsonplaceholder.typicode.com/todos
\`\`\`

**Response:**
- Status: `201 Created`
- Body:
\`\`\`json
{
  "title": "study",
  "completed": false,
  "id": 201
}
\`\`\`

---

## 3. Request to a missing resource (404)

**Command:**
\`\`\`bash
curl -i https://jsonplaceholder.typicode.com/todos/9999
\`\`\`

**Response:**
- Status: `404 Not Found`
- Headers (key ones):
  - `Content-Type: application/json; charset=utf-8`
- Body:
\`\`\`json
{}
\`\`\`

---

## 4. Using `-i` to show headers/status line

**Command:**
\`\`\`bash
curl -i https://jsonplaceholder.typicode.com/todos/1
\`\`\`

**Response:**
- Status line: `HTTP/1.1 200 OK`
- Headers:
  - `Content-Type: application/json; charset=utf-8`
  - `Content-Length: 83`
- Body:
\`\`\`json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
\`\`\`