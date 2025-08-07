# 🎓 Student Management App with Node.js, Express & Cookie/Form Integration

A simple **student management RESTful API and interactive HTML demo** built with **Node.js**, **Express**, and **EJS**. It supports basic CRUD operations using local JSON storage and also features a `/welcome.html` endpoint to demonstrate form handling and cookie-based interactions.

---

## 🚀 Features

- 🧾 Full CRUD for student records (REST API)
- ✅ Input validation with AJV
- 🍪 Cookie handling via `cookie-parser`
- 🛡️ Basic HTTP security headers with `helmet`
- 📋 Custom and built-in middlewares
- 🖼️ EJS rendering for student list
- 🧾 Form handling with Base64 cookie encoding
- 📁 Static file support

---

## 📂 Folder Structure

```
.
├── app.js                    # Main entry point
├── Routes/
│   └── students.js
├── Controllers/
│   └── studentsController.js
├── Models/
│   └── studentModel.js
├── Middlewares/
│   └── Logging.js
├── Templates/
│   ├── students.ejs
│   └── Util/
│       └── studentsValidator.js
├── data/
│   └── Students.json
├── Public/                   # For static files (if needed)
├── welcome.html              # HTML form endpoint
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
```

---

## 📬 API Endpoints

| Method | Endpoint            | Description             |
|--------|---------------------|-------------------------|
| GET    | `/api/students/`    | List all students       |
| GET    | `/api/students/:id` | Get student by ID       |
| POST   | `/api/students/`    | Add a new student       |
| PUT    | `/api/students/:id` | Update student by ID    |
| DELETE | `/api/students/:id` | Delete student by ID    |

---

## 🔹 `/welcome.html` Endpoint

- **GET /welcome.html**: Serves a static welcome page.
- **POST /welcome.html**: Accepts form data, sets Base64-encoded cookies, and returns a personalized message.
- Also demonstrates cookie decoding via a bonus `/haha` route.

Used to showcase form handling and cookie logic in Express apps.

---

## 🔧 Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   node app.js
   ```

3. Visit: `http://localhost:3000/`

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
