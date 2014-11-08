var fs = require('fs'),
    file = process.argv[2],
    fs = fs.readFileSync(file, 'utf-8'),
    split = fs.split('\n'),
    lineCount = split.length - 1;

console.log( lineCount );
