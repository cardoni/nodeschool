var fs = require('fs'),
    path = require('path'),
    dir = process.argv[2],
    filter = process.argv[3];

fs.readdir( dir, function( err, files ) {
    if ( err ) throw err;

    files.forEach( function( fileName ){
        if ( path.extname( fileName ) === '.' + filter ) {
            console.log( fileName );
        }
    });
});
