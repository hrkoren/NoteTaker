//dependencies
const express = require('express');
const path = require('path');

//set up express app
const app = express();
const PORT = process.env.PORT || 8080;

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
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public','index.html')));

app.get('../notes', (req,res) => res.sendFile(path.join(__dirname, 'public', 'notes.html')));

//display all notes
app.get('/api/notes', (req, res) => res.json(notes));

//display a single note, or return false
app.get('api/notes/:note', (req, res) => {
    const searched = req.params.note;
    console.log(searched);

    for (let i = 0; i < notes.length; i++) {
        if (searched === notes[i].routeName) {
            return res.json(notes[i]);
        }
    }
})

//create new notes
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.routeName = newNote.name.replace(/\s+/g, '');
    console.log(newNote);

    notes.push(newNote);
    res.json(newNote);
});

//start server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));