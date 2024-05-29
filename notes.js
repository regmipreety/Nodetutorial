const fs = require('fs')
const getNotes = function(){
    console.log("Test string")
}

const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new note added')
    }
     else {
        console.log('duplicate note found')
    }
}
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}
const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    }
     catch (e) {
        return []
     }
    }
const removeNote = function(title){
    const notes = loadNotes();
    const checkTitle = notes.filter(function(note){
        if(note.title === title){
            notes.pop({
                title:title
            })
            saveNotes(notes)
            console.log("title deleted "+ title)
        }else {
            console.log("title not found "+ title)
        }
    })
}
 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}