const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const {uploadMulter} = require('./utils/uploadMulter');
const {db} = require('./config/dbConnect');

db.on("error", console.log.bind(console, 'Conection db error'));
db.once("open", () => {
  console.log('mongodb connection successfuly');
});

const PORT = 3001;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '/uploads')));

app.post('/upload', uploadMulter.single('file'), (req, res) => {
  if(req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded'});
  }
  return res.status(200).json({message: "deu tudo certo parsa"});
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));