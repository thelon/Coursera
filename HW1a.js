var fs = require('fs');
var outfile = "HW1a.txt";
var out = "A startup is a business built to grow rapidly.\n";
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);