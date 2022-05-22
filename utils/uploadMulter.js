const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'uploads');
    },
    filename: (req, file, cb) => {
        callback(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage });

module.exports = {uploadMulter}