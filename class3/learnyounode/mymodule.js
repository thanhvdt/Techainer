const fs = require('fs');
const path = require('path');

function handle(dir, ext, callback) {
    fs.readdir(dir, function (err, list) {
      if (err) {
        return callback(err);
      }
      else {
        ext = "." + ext;
        var fileLs = list.filter(function(file) {
            return path.extname(file) == ext})
      }
    return callback (null, fileLs);
    });
}

module.exports = handle;
