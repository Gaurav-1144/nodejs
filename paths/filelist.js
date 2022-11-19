const fs = require('fs');
const path = require('path');
const dirName = path.join(__dirname,'files');
//console.log(dirName);

/* Print files */
for(i=0;i<5;i++){
    fs.writeFileSync(`${dirName}/hello${i}.txt`,"Hello Test");
}

/* get files in array form */
fs.readdir(dirName,(error,files)=>{
    console.log(files);
})


/* get files with form */
fs.readdir(dirName,(error,files)=>{

    files.forEach((items)=>{
        console.log(items);
    })
})
