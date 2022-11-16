const fs = require('fs');
// fs.writeFileSync(process.argv[2],process.argv[3]);
// console.log(process.argv);

if(process.argv[2]=='Add') {
    fs.writeFileSync(process.argv[3],process.argv[4]); 

} else if(process.argv[2]=='Delete') {
    fs.unlinkSync(process.argv[3]);
} else {
    console.log("Wrong output");
}