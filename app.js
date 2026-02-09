import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js';
import notesRoutes from './routes/noteRoutes.js';


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Secure Notes API</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f7f7f7;
                color: #333;
                margin: 0;
                padding: 20px;
            }
            h1 {
                color: #4a90e2;
            }
            table {
                border-collapse: collapse;
                width: 100%;
                margin-top: 20px;
                background-color: #fff;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            th, td {
                border: 1px solid #ddd;
                padding: 12px;
                text-align: left;
            }
            th {
                background-color: #4a90e2;
                color: #fff;
            }
            tr:nth-child(even) {
                background-color: #f2f2f2;
            }
            p {
                font-size: 16px;
            }
            code {
                background-color: #eee;
                padding: 2px 5px;
                border-radius: 4px;
            }
        </style>
        </head>
        <body>
        <h1>Secure Notes API</h1>
        <p>Test this API on Postman using the following endpoints:</p>
        <table>
            <tr>
            <th>Method</th>
            <th>Endpoint</th>
            <th>Description</th>
            <th>Requires Auth</th>
            </tr>
            <tr>
            <td>POST</td>
            <td>/api/auth/register</td>
            <td>Register a new user</td>
            <td>No</td>
            </tr>
            <tr>
            <td>POST</td>
            <td>/api/auth/login</td>
            <td>Login an existing user</td>
            <td>No</td>
            </tr>
            <tr>
            <td>POST</td>
            <td>/api/notes</td>
            <td>Create a new note</td>
            <td>Yes (JWT)</td>
            </tr>
            <tr>
            <td>GET</td>
            <td>/api/notes</td>
            <td>Get all notes for logged-in user</td>
            <td>Yes (JWT)</td>
            </tr>
            <tr>
            <td>GET</td>
            <td>/api/notes/category/:category</td>
            <td>Get notes by category</td>
            <td>Yes (JWT)</td>
            </tr>
            <tr>
            <td>PUT</td>
            <td>/api/notes/:id</td>
            <td>Update a note by ID</td>
            <td>Yes (JWT)</td>
            </tr>
            <tr>
            <td>DELETE</td>
            <td>/api/notes/:id</td>
            <td>Delete a note by ID</td>
            <td>Yes (JWT)</td>
            </tr>
        </table>
        <p>Use Postman to test the API with JSON bodies and your JWT token for protected routes.</p>
        <p>Example of Authorization header for protected routes:</p>
        <code>Authorization: Bearer &lt;your-token&gt;</code>
        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});