const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', handle);
    
function handle (err, data) {
    if (!err) {
        let newline = data.split('\n').length - 1;
        console.log(newline);
    }
}

