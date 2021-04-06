//dependencies
const express = require('express');
const path = require('path');

//set up express app
const app = express();
const PORT = process.env.PORT || 3000;

//set up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//notes data

const activeNote = [
    {
        noteTitle: '',
        noteText: '',
    }
]

const newNote = [
    {
        noteId: '',
        title: '',
        text: '',
    }
]

//routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req,res) => res.sendFile(path.join(__dirname, 'notes.html')));

//display all notes
app.get('/api/notes', (req, res) => res.json(notes));

//display a single note, or return false
app.get('api/notes/:note', (req, res) => {
    const searched = req.params.note;
    console.log(searched);
})