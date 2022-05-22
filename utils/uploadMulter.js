const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '__dirname/../client/public/uploads/');
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}_${file.originalname}`);
    }
});

const uploadMulter = multer({ storage });

module.exports = {uploadMulter}