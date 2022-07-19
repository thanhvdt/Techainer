const fs = require('fs');
const path = require("path");

fs.readdir(process.argv[2], function(err, list){
    if (!err) {
        let ext = "." + process.argv[3];
        // let fileLs = list.filter(function(file) { 
        //     return path.extname(file) == ext});
        // console.log(fileLs);
        list.forEach(function(file){
            if (path.extname(file) == ext) {
                console.log(file);
            }
        })
        
    }
})