const {files} = require('../models/Files');

const fileUploadController = async (req, res, next) => {
  try{
      const file = new files({
          fileName: req.file.originalname,
          filePath: req.file.path,
          fileType: req.file.mimetype,
      });
      await file.save();
      res.status(201).send('File Uploaded Successfully');
  }catch(error) {
      res.status(400).send(error.message);
  }
};

module.exports = {fileUploadController};
