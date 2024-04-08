const express = require('express')
const router = express.Router()

const upload = require('../config/multer')

const PictureController = require('../controllers/PictureController')

router.post('/', upload.single("file"), PictureController.create)
router.get('/', PictureController.findAll)

module.exports = router;