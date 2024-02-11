import express from 'express';
import Connection from './database/db.js';

const app = express();
const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () => console.log(`Server started succussfully on Port ${PORT}`));