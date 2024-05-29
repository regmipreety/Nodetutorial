const fs = require('fs');
const readStream = fs.createReadStream('./docs/blog.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/blogCopy.txt');
readStream.on('data', (chunk)=>{
    console.log('New Chunk');
    console.log(chunk);
    writeStream.write(chunk);
    console.log('New Chunk added to file');
})
//piping
// Does same as above code as long as the files are readable and writeable 
readStream.pipe(writeStream);