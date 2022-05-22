const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const {uploadMulter} = require('./utils/uploadMulter');
const {db} = require('./config/dbConnect');
const {fileUploadController} = require('./controllers/fileController');
const routes = require('./routes');
const PORT = 3001;

db.on("error", console.log.bind(console, 'Conection db error'));
db.once("open", () => {
  console.log('mongodb connection successfuly');
});

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, 'client/public/uploads')));

app.use(routes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));