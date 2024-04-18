const express = require('express')
const router = express.Router()

const LoginController = require('../controllers/loginController.js')

router.post('/', LoginController.create)
router.get('/', LoginController.findAll)

module.exports = router;