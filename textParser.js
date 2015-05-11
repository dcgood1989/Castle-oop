var fs = require("fs");

var filename = process.argv[2];
// usage (specific) example: node foo.js nameOfFiles.extension

fs.readFile(filename, function(err, data) {
  if (err) throw err;

var fs = require("fs");

var filename = process.argv[2];

fs.writeFile(filename + '.copy', data, function(err) {
  if (err) throw err;

  console.log("File Copied");
  });
});
