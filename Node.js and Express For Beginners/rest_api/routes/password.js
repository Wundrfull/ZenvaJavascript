const express = require('express');
const router = express.Router();

/**
 * Forget Password endpoint.
 */
router.post('/forgot-password', (request, response) => {
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
router.post('/reset-password', (request, response) => {
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

module.exports = router;
