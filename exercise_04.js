var fs = require('fs'),
    file = process.argv[2];

fs.readFile( file, 'utf-8', function(err, data) {
  if (err) throw err;
  var lineCount = data.split('\n').length - 1;
  console.log( lineCount );
});
