const express = require('express');
const {uploadMulter} = require('./utils/uploadMulter');

const PORT = 3001;
const app = express();

app.use();

app.post('/upload', uploadMulter.single('file'), (req, res) => {
  if(req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded'});
  }



});

app.listen(PORT, () => console.log('Server started...'));