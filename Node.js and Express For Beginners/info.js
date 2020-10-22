/** ============ INFO FILE ============ **/

// LEARNING GOALS //

/**
 * - Node.js
 * - Express.js
 * - Passport.js
 * - Mongoose.js
 * - JSON Web Tokens (JWT)
 * - MongoDB
 */

/**
 * STEPS
 * 1. User sends request to Express Server (Username, Password)
 * 2. Validate Username + Password with Database (MongoDB)
 * 3. Generate JWT (JSON Web Token)
 * 4. Add JWT to user's cookies
 * 5. Moving forward, we can use JWT for authentication
 *
 * Will be going over other devtools like Nodemon, Postman, and MongoDB compass.
 */

/**
 * Express Route
 *
 * - When you create a route in your Express application , you need to specify the method that is supported on the route.
 *   Example: app.get('/status', (request, response) => { });
 *
 * - Yopu can use app.all() to load middleware functions at a particular path for all HTTP request methods.
 */

/**
 * Postman
 *
 * - If you sign up of r a Postman account, you can backup your collections
 *   to your account and use them on multiple computers.
 *
 * - In addition to this, you can generate a link to your collection and share that link with others.
 *
 * - You can also export your collection as a JSON file and share that file with others.
 */

/**
 * Nodemon
 *
 * - You can install Nodemon using NPM via: npm install nodemon
 *
 * - Nodemon is a dev tool that will restart any node applications when file changes are detected in the directory.
 */

/**
 * Express Routes
 *
 * When you are defining your Express Routes, you can use string patterns and regualr expressions.
 *
 * - 404 : Fail safe handler for missing endpoints.
 * - 500 : Internal server error, will catch errors in code.
 * - status : Additional Route. Status route to see status of application. Makes
 *            users aware that API is working. Devs can monitor health of api as well.
 * - signup : Allow users to sign up for the application.
 * - login : Allow users to login to application. Might generate a user authentication
 *           to allow other endpoint usage.
 * - logout : Will revoke session + token.
 * - token: Refresh a token.
 * - forgot password : User forgets password
 * - reset password : User reset password.
 */

/**
 * Express Route Middleware
 *
 * - When you create a route(s) in your Express application, the order of the routes is important. When a request
 *   comes in, Express will start trying to route that request to the different routes that you have defined started
 *   top to bottom.
 *
 * - When you want to add an Error middleware handler, or a 404 handler, you need to make sure these are added at the
 *   end after all your other routes.
 */

/**
 * Express Request Object
 *
 * - When you create your Express routes, you will receive both the Express Request and Express Response objects.
 *
 * - The Express Request object will have all of the meta data tied to the incoming request.
 */

/**
 * Body-parser
 *
 * - You can install body-parser using NPM via: npm install body-parser
 *
 * - Body-parser is used to parse incoming request bodies in a middleware before those request get to your handlers.
 *
 * - This will make the body available under request.body
 */
