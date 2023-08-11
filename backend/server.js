const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { connectDB } = require('./config/db');

connectDB();

const app = express();

app.use(express.json());

// Routes
// app.use('/api/home', require('./routes/home'));

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server running @ http://${host}:${port}`.yellow)
});
