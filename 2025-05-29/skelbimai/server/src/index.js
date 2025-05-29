import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import user from './controller/user.js';

try {
    await mongoose.connect('mongodb://127.0.0.1:27017/advertisements');
    console.log('Connected to database');
} catch {
    console.log('Unable to reach database service');
}

const app = express();

// Nurodymas leisti užklausas iš skirtingų tinklapių nei šis serveris
app.use(cors())

// Nurodymas priimti duomenis x-www-form-urlencoded formatu
app.use(express.urlencoded());

// Nurodymas priimti duomenis JSON formatu:
// app.use(express.json());

// Priskiriame controlerį prie bendros aplikacijos
// Pirmu parametru nurodomas kelias, antru routeris
app.use('/api/user', user);

app.listen(3000, () => console.log('Server is running'));

// MVC
// Model - Duomenų struktūra
// View - React
// Controller - Express route'ai
