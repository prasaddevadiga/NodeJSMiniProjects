const fileSystem = require('fs')
const chalk = require('chalk')

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("Note saved successfully")
    } else {
        console.log("note title taken")
    }
}

const removeNote = function(title) {
    const notes = loadNotes()
    const uniqueNotes = notes.filter(function(note) {
        return note.title != title
    })
    if (uniqueNotes.length != notes.length) {
        saveNotes(uniqueNotes)
        console.log(chalk.bgGreen.black("Note removed successfully"))
    } else {
        console.log(chalk.bgRed.black("note not found"))
    }
}


const saveNotes = function (notes) {
    const data = JSON.stringify(notes)
    fileSystem.writeFileSync("notes.json", data)
}

const loadNotes = function () {
    try {
        return JSON.parse(fileSystem.readFileSync("notes.json").toString())
    } catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote, 
    removeNote: removeNote
}