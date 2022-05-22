const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/upload-files-db')

let db = mongoose.connection;

module.exports = {db};