// General way to file system 
const fs = require('fs');
fs.writeFileSync('filesystem/hello.txt',"Learning Node js");
// Second way
const fs2 = require('fs').writeFileSync;
fs2('filesystem/Test.txt',"Learning something about node js");