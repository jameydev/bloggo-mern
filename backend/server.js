const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorMiddleware');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
// app.use('/api/users', require('./routes/users'));
// app.use('/api/home', require('./routes/home'));

app.use(errorHandler);

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server running @ http://${host}:${port}`.yellow)
});
