const fs = require('fs');

const handleFileRequest = (path, callback) => {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      console.log('You requested', path);
      console.log('File does not exist', err);
    } else {
      fs.readFile(path, (err, data) => {
        callback(data);
      });
    }
  });
};

module.exports = {
  handleFileRequest
};
