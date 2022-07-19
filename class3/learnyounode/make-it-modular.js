const mymodule = require('./mymodule.js');

let dir = process.argv[2];
let ext = process.argv[3];

mymodule(dir, ext, function(err, data){
    if (err) {
        return console.error('Error');
    }
    else {
        data.forEach(element => {
            console.log(element);
        });;
    }
})