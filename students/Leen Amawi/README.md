# Leen Amawi

## About Me

I am a Computer Systems Engineering student interested in software development and improving my practical development skills.

## Goals

- Improve my Git and GitHub workflow.
- Build stronger backend and frontend development skills.
- Learn how to work effectively in a team.
- Practice writing clean, tested, and maintainable code.

## Development Setup

- Ubuntu 24.04.2 LTS
- JDK 21
- Node.js LTS
- npm
- IntelliJ IDEA
- VS Code
- Docker Desktop
- PostgreSQL 16 running through Docker
- Git
- GitHub CLI (gh)

## Running the Project
# Backend
1. Go to the backend folder:
cd students/Leen\ Amawi/backend
2. Start PostgreSQL with Docker:
docker compose up -d
3. Start the Spring Boot application:
mvn spring-boot:run

The backend runs on:
http://localhost:8080
## Frontend
1. Open another terminal and go to the frontend folder:
cd students/Leen\ Amawi/frontend  
2. Install dependencies:
npm install
3. Start the frontend:
npm run dev
The frontend runs on the Vite development server.

## Demo User
- The application seeds a demo user on startup:

Username: demo
Password: demo123

- The password is stored as a BCrypt hash.
- The default statuses are:
Backlog
In Progress
Done

## Environment Variables
The backend configuration uses the following values:

DB_URL
DB_USERNAME
DB_PASSWORD
JWT_SECRET
JWT_EXPIRATION

- Example values for local development:
DB_URL=jdbc:postgresql://localhost:5432/db
DB_USERNAME=postgres
DB_PASSWORD=devpass
JWT_SECRET=your-long-random-secret-here
JWT_EXPIRATION=3600000

- note: Do not commit real passwords, JWT secrets, or `.env` files.
## Demo Script
1. Start PostgreSQL with docker compose up -d.
2. Start the backend.
3. Start the frontend.
4. Register a new user.
5. Log in with the new user.
6. Open the Tasks page.
7. Create a task.
8. Edit the task.
9. Move the task between statuses.
10. Delete the task.
11. Log out.
12. Try to open /tasks again and confirm that the user is redirected to /login.