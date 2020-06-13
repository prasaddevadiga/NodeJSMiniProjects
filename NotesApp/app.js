
const yargs = require('yargs')
const notes = require('./Notes')


// Create add command 
yargs.command({
    command: 'add',
    describe: 'This command add note',
    builder: {
        title: {
            describe: "provide title",
            demandOption: true, 
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type : "string"
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'This command remove note',
    builder: {
        title: {
            describe: "title of the note to be removed",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create read command 
yargs.command({
    command: 'read',
    describe: 'This command read the note',
    builder: {
        title: {
            describe: "title of the note to be read",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
        console.log('Reading the note')
    }
})

// Create list command 
yargs.command({
    command: 'list',
    describe: 'This command lists the notes',
    handler(argv) {
        notes.listNotes(argv.title)
        console.log('Listing the notes')
    }
})

console.log('Body - ' + yargs.argv.body)