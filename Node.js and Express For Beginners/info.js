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
