const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');

// Middleware is ran top to bottom, and we want bodyParser to be used throughout, so we place at beginning.

/**
 * Update express settings
 */
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded data
app.use(bodyParser.json()); // parse application/json

/**
 * Telling express that anytime there is a get request at this route. This
 * is the callback function we want to run at this request.
 */
app.get('/', (request, response) => {
  response.send('Hello World!');
});

/**
 * Additional Route. Status route to see status of application. Makes
 * users aware that API is working. Devs can monitor health of api as well.
 */
app.get('/status', (request, response) => {
  response.status(200).json({ message: 'ok', status: 200 });
});

/**
 * Signup endpoint.
 */
app.post('/signup', (request, response, next) => {
  // Check if  client doesn't provide the correct elements for the request.
  if (!request.body) {
    response.status(400).json({ message: 'invalid body', status: 400 });
  } else {
    response.status(200).json({ message: 'ok', status: 200 });
  }
});

/**
 * Login endpoint.
 */
app.post('/login', (request, response) => {
  // Check if  client doesn't provide the correct elements for the request.
  if (!request.body) {
    response.status(400).json({ message: 'invalid body', status: 400 });
  } else {
    response.status(200).json({ message: 'ok', status: 200 });
  }
});

/**
 * Logout endpoint.
 */
app.post('/logout', (request, response) => {
  // Check if  client doesn't provide the correct elements for the request.
  if (!request.body) {
    response.status(400).json({ message: 'invalid body', status: 400 });
  } else {
    response.status(200).json({ message: 'ok', status: 200 });
  }
});

/**
 * Token endpoint.
 */
app.post('/token', (request, response) => {
  if (!request.body || !request.body.refreshToken) {
    response.status(400).json({ message: 'invalid body', status: 400 });
  } else {
    const { refreshToken } = request.body;
    response.status(200).json({
      message: `refresh token requested for token: ${refreshToken}`,
      status: 200,
    });
  }
});

/**
 * Forget Password endpoint.
 */
app.post('/forgot-password', (request, response) => {
  if (!request.body || !request.body.email) {
    response.status(400).json({ message: 'invalid body', status: 400 });
  } else {
    const { email } = request.body;
    response.status(200).json({
      message: `forgot password requested for email: ${email}`,
      status: 200,
    });
  }
});

/**
 * Reset Password endpoint.
 */
app.post('/reset-password', (request, response) => {
  if (!request.body || !request.body.email) {
    response.status(400).json({ message: 'invalid body', status: 400 });
  } else {
    const { email } = request.body;
    response.status(200).json({
      message: `password reset requested for email: ${email}`,
      status: 200,
    });
  }
});

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
