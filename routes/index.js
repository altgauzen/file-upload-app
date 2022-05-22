const express = require('express');
const {uploadMulter} = require('../utils/uploadMulter');
const {fileUploadController} = require('../controllers/fileController');
const router = express.Router();

router.post('/upload', uploadMulter.single('file'), fileUploadController);

module.exports = router;