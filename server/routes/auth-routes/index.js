const express = require('express');
const { registerUser } = require('../../controllers/authControllers/index');

const router = express.Router();

router.post("/register", registerUser)

module.exports = router
