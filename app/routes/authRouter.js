const express = require('express');
const AuthController = require('../controllers/authController');

const router = express.Router();

router.post('/login', AuthController.logIn);
router.post('/signup', AuthController.signUp);
router.post('/signout', AuthController.signOut);

module.exports = router;
