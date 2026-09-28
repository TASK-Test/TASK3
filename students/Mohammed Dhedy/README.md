# Mohammad — Intro

## Who I am
i am mohammed dhedy , computer science student, graduated from arab american university 2026
my long goal is to become an experinced full stack developer ,and at the right time i am a junior full stack.

## Goals for this program
- learn how the real projects workflow is done
- gain experince from experted ASAL Engineers 
- learn new technologies

## machine setup

- OS: Windows 11
- JDK: 21
- Node: v24.14.0 (LTS)
- IDE: IntelliJ IDEA Community + VS Code
- Docker Desktop: installed
- GitHub CLI (gh): installed, authenticated

## Task Tracker
A full-stack task management app built with React, TypeScript, Spring Boot,FlyWay, PostgreSQL,Docker, and JWT authentication.

## Environment variables

Create `backend/.env` from `backend/.env.example`:

```env
POSTGRES_DB=your_database_name
POSTGRES_USER=your_database_user
POSTGRES_PASSWORD=your_database_password
JWT_SECRET=your_base64_encoded_32_byte_secret
JWT_EXPIRATION_MS=3600000
```

Create `frontend/.env` from `frontend/.env.example`:
```env
VITE_API_URL=http://localhost:8080/api
```
Do not commit the real .env files or JWT secret.

## Run the project

### Start PostgreSQL

From students/mohammed dhedy directory run:

```bash
cd backend
docker compose up -d
```

### Start the backend
From students/mohammed dhedy/backend directory run:
```bash
cd TaskTracker
mvn spring-boot:run
```

The backend runs at:

```text
http://localhost:8080
```

### Start the frontend

Open another terminal from student/mohammed dhedy directory and run:

```bash
cd frontend
npm install
npm run dev
```

Open the application at:

```text
http://localhost:5173
```

## Demo user
 use these demo user credntials to login :
```text
Username: m_demo
Password: demo1234
```

## Run tests

### Backend tests
From students/mohammed dhedy directory run:
```bash
cd backend/TaskTracker
mvn test
```

### Frontend tests
From students/mohammed dhedy directory run:
```bash
cd frontend
npm test
npm run build
npm run lint
```

## Demo steps

1. Start PostgreSQL, the backend, and the frontend.
2. Register a new user or log in with the demo user.
3. Open the task list.
4. Create a new task.
5. Open the task details by clicking on the task title.
6. Click Update and edit the task status.
7. Confirm that the changes appear in the task list.
8. Return to task details and delete the task.
9. Refresh the page and confirm that the task does not appear in the task list;
10. Log out.
11. Open `/tasks` and confirm that the application redirects to `/login`.