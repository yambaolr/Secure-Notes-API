# Secure Notes API

A backend-only RESTful API for managing personal notes with JWT authentication.
Users can register, log in, and perform CRUD operations on their own notes.

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt
- Postman

## Features
- User registration & login
- JWT-based authentication
- Protected routes
- CRUD operations for notes
- Notes categorized using enums
- Ownership-based authorization

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/yambaolr/secure-notes-api.git
cd secure-notes-api
```
2. Install Dependencies
```bash
npm install
```

4. Create a .env file
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
6. Run the server
```bash
npm run dev
```

You can view the live site at: https://secure-notes-api-ufwr.onrender.com/
