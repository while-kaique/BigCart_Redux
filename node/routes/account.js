const express = require('express')
const router = express.Router()

const LoginController = require('../controllers/loginController')

router.post('/', LoginController.create)
router.get('/', LoginController.findAll)

module.exports = router;