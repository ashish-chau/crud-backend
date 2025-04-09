# 🚀 Task Manager - Backend

This is the **backend** of the Task Manager application, built with **Node.js**, **Express**, and **MySQL**.

## 💡 Features

- User Registration and Login
- JWT-based Authentication
- CRUD operations for tasks
- Task status management (pending, in-progress, completed)
- MySQL database with relationships
- RESTful API endpoints

---

## 📁 Project Structure

```
backend/
├── controllers/         # Business logic for routes
├── routes/              # API route definitions
├── models/              # Database models (MySQL)
├── middleware/          # Auth middleware (JWT)
├── config/              # DB config and connection
├── .env                 # Environment variables
└── server.js            # App entry point
```

---

## 🔧 Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Create a `.env` file in the `backend/` folder:

```env
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=taskmanager
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 3. Database Setup

Make sure MySQL is running and create a database named `taskmanager`:

```sql
CREATE DATABASE taskmanager;
```

The app will automatically create the `users` and `tasks` tables on startup (if coded accordingly).

### 4. Run the Server

```bash
npm start
```

Backend will run at: `http://localhost:5000`

---

## 🛠 API Endpoints

### Authentication

| Method | Endpoint         | Description         |
|--------|------------------|---------------------|
| POST   | /auth/register   | Register new user   |
| POST   | /auth/login      | Login and get token |

### Tasks

| Method | Endpoint       | Description               |
|--------|----------------|---------------------------|
| GET    | /tasks         | Get all tasks             |
| POST   | /tasks         | Create new task           |
| PUT    | /tasks/:id     | Update task               |
| DELETE | /tasks/:id     | Delete task               |

> 🔐 All task routes are protected and require a valid JWT.

---

## 🚫 Protected Routes

To access any route under `/tasks`, you must send the JWT token in the request header:

```http
Authorization: Bearer <your-token>
```

---

## 📊 Technologies Used

- Node.js
- Express.js
- MySQL / MySQL2
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cors

---

## 🙌 Author

- [Your Name](https://github.com/ashish-chau)

---




