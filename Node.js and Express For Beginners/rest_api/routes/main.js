const express = require('express');
const passport = require('passport');

const router = express.Router();

/**
 * Telling express that anytime there is a get request at this route. This
 * is the callback function we want to run at this request.
 */
router.get('/', (request, response) => {
  response.send('Hello World!');
});

/**
 * Additional Route. Status route to see status of application. Makes
 * users aware that API is working. Devs can monitor health of api as well.
 */
router.get('/status', (request, response) => {
  response.status(200).json({ message: 'ok', status: 200 });
});

/**
 * Signup endpoint.
 *
 * Used authentication before we process the request.
 */
router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  (request, response, next) => {
    response.status(200).json({ message: 'signup successfull', status: 200 });
  }
);

/**
 * Login endpoint.
 *
 * Will use authentication after we process the request.
 */
router.post('/login', (request, response, next) => {
  passport.authenticate('login', (error, user) => {
    try {
      if (error) {
        return next(error);
      }
      if (!user) {
        return next(new Error('email and password are required'));
      }

      request.login(user, { session: false }, (err) => {
        if (err) {
          return next(err);
        } else {
          return response.status(200).json({ user, status: 200 });
        }
      });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  })(request, response, next);

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
router.post('/logout', (request, response) => {
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
router.post('/token', (request, response) => {
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
 * Takes our router variable and makes it available to other files.
 *
 * Make into object, like this: { router, x, ... }, if there are multiple variables you want to make available to other files.
 */
module.exports = router;
