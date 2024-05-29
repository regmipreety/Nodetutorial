const fs = require('fs')

//directories
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err)=>{
        if(err){
        console.log(err);
        }
    console.log('folder created');

    })
} else{
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err)
        } else {
            console.log('folder deleted')
        }
    })
}

//files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if(err){
            console.log(err)
        } else{
            console.log('file deleted')
        }
    });
}