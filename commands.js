const { demandOption, describe } = require('yargs')
const yargs = require('yargs/yargs')
const notes = require('./notes.js')
//create yargs command
const add = yargs(process.argv.splice(2))
.command('add', 'add title and body', {
    title:{
        describe: 'Note Title',
        demandOption: true,
        type:'string'
    },
    body: {
        description: 'Body',
        demandOption: true,
        type: 'string'
    }
},
    function(argv){
    notes.addNote(argv.title, argv.body)

})
.command('remove','remove title from note',{
    title:{
        describe:'Note title to be deleted',
        demandOption: true,
        type:'string'
    }
}, function(argv) {
    notes.removeNote(argv.title)
})
.parse();
//remove command

