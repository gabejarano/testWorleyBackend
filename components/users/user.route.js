const { Router } = require('express');
const { login } = require('./user.controller')

const router = Router();

router.post('/login', login)

module.exports = router;