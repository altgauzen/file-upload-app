const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema(
  {
    id: {
      type: String
    },
    fileName: {
      type: String,
      required: true
    },
    filePath: {
      type: String,
      required: true
    },
    fileType: {
      type: String,
      required: true
    },
  }
);

const files = mongoose.model('files', fileSchema);

module.exports = {files};
