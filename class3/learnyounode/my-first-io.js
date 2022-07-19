const fs = require('fs');

let file = fs.readFileSync(process.argv[2]).toString();
let newline = file.split('\n').length-1;

console.log(newline);