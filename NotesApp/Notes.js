const fileSystem = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) =>  note.title === title )
    
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

const removeNote = (title) => {
    const notes = loadNotes()
    const uniqueNotes = notes.filter((note) => note.title != title)
    if (uniqueNotes.length != notes.length) {
        saveNotes(uniqueNotes)
        console.log(chalk.bgGreen.black("Note removed successfully"))
    } else {
        console.log(chalk.bgRed.black("note not found"))
    }
}

const listNotes = () => {
    console.log(chalk.green("Your notes"))
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(chalk.green("Title =>"), element.title)
        console.log(chalk.green("Body =>"), element.body)
        console.log("")
    });
}

const getNotes = () => {
    return "your notes..."
}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
    fileSystem.writeFileSync("notes.json", data)
}

const loadNotes = () => {
    try {
        return JSON.parse(fileSystem.readFileSync("notes.json").toString())
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote, 
    removeNote: removeNote,
    listNotes: listNotes
}