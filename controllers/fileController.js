const {Files} = require('../models/Files');

const fileUploadController = async (req, res, next) => {
  try{
      const file = new Files({
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

const getAllFilesController = async (req, res, next) => {
    try{
        const allFiles = await Files.find();
        if(allFiles.length === 0) {
            return res
                .render('fileList', {
                     allFiles: '', message: 'There are no files in the database'
                    })
        }
        return res.render('fileList', { allFiles, message: '' });
    }catch(error) {
        res.status(400).send(error.message);
    }
}

module.exports = {fileUploadController, getAllFilesController};
