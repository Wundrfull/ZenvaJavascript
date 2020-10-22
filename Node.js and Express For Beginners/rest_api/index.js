require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const routes = require('./routes/main');
const passwordRoutes = require('./routes/password');

const app = express();
const port = process.env.PORT || 4200;

/**
 * Update express settings
 *
 *  Middleware is ran top to bottom, and we want bodyParser to be used throughout, so we place at beginning.
 */
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded data
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN }));

// require passport auth
require('./auth/auth');

/**
 * We will be using the basic '/' which will make the middleware check both files.
 * For future purposes, you can specify routes, '/specified/route/' and it will only check one file.
 */
app.use('/', routes);
app.use('/', passwordRoutes);

// setup routes

// Catch all other routes
app.use((request, response) => {
  response.status(404).json({ message: '404 - Not Found', status: 404 });
});

// Handling errors
app.use((error, request, response, next) => {
  console.log(error);
  response
    .status(error.status || 500)
    .json({ error: error.message, status: 500 });
});

app.listen(port, () => {
  // Any code will be ran after the server is up and running.
  console.log(`Server is running on port: ${port}`);
});
