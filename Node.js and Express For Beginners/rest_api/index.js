const express = require('express');
const app = express();
const port = 8080;

/**
 * Telling express that anytime there is a get request at this route. This
 * is the callback function we want to run at this request.
 */
app.get('/', (request, response) => {
  console.log(request);
  response.send('Hello World!');
});

/**
 * Example test end point that will send back "Test"
 */
app.get('/test', (request, response) => {
  console.log(request);
  response.send('test');
});

app.listen(port, () => {
  // Any code will be ran after the server is up and running.
  console.log(`Server is running on port: ${port}`);
});
