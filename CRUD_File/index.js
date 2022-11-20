const fs = require('fs');
const path = require('path');
const directory = path.join(__dirname,'CRUD_Folder');
//console.log(directory);
const filepath = `${directory}/text.txt`;
// fs.writeFileSync(`${directory}/text.txt`,"This is new file");

/** Read file */
fs.readFile(`${filepath}`,'utf-8',(err,item)=>{
    console.log(item);
})

/** Append file */
fs.appendFile(`${filepath}`,' and i am the creator of this file',(error)=>{
   if(!error) console.log("File Appended successfully");
});

/** Rename file  */
fs.rename(`${filepath}`,`${directory}/Testingfile.txt`,(err)=>{
    if(!err) console.log("File Rename successfully");
})

/** Delete existing file */
fs.unlinkSync(`${directory}/Testingfile.txt`);