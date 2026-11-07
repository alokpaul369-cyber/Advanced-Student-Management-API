# 🎓 Advanced Student Management API

A secure REST API for managing student records, built with **Express, MongoDB and JWT** using an MVC structure.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)

## ✨ Features

- 🔑 User registration & login with hashed passwords (bcrypt)
- 🛡️ Protected student routes using JWT middleware
- 📋 Full CRUD for students
- 🧱 Clean MVC structure (models, controllers, routes, views)

## 📡 API

| Method | Endpoint | Description | Auth |
|:--|:--|:--|:--:|
| `POST` | `/api/auth/register` | Register a user | – |
| `POST` | `/api/auth/login` | Login and get a token | – |
| `GET` | `/api/students` | Get all students | 🔒 |
| `GET` | `/api/students/:id` | Get one student | 🔒 |
| `POST` | `/api/students` | Create a student | 🔒 |
| `PUT` | `/api/students/:id` | Update a student | 🔒 |
| `DELETE` | `/api/students/:id` | Delete a student | 🔒 |

## 🚀 Getting Started

```bash
git clone https://github.com/alokpaul369-cyber/Advanced-Student-Management-API.git
cd Advanced-Student-Management-API
npm install
```

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d
```

Then start the server:

```bash
npm run dev
```

The server runs at **http://localhost:5000**.

---

<p align="center">Made with ❤️ by <a href="https://github.com/alokpaul369-cyber">Alok Paul</a></p>
