const express = require('express');
const {uploadMulter} = require('../utils/uploadMulter');
const {
  fileUploadController,
  getAllFilesController
} = require('../controllers/fileController');
const router = express.Router();

router.post('/upload', uploadMulter.single('file'), fileUploadController);
router.get('/upload', getAllFilesController);

module.exports = router;