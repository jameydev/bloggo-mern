const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorMiddleware');
const postsRouter = require('./routes/posts');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
// app.use('/api/users', require('./routes/users'));
app.use('/api/posts', postsRouter);

app.use(errorHandler);

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 5000;
const env = process.env.NODE_ENV || 'development';

app.listen(port, () => {
  console.log(`Server running in ${env} mode @ http://${host}:${port}`.yellow)
});
