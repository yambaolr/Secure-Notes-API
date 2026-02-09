import Note from '../models/Note.js';

// create
export const createNote = async (req, res) => {
    const { title, content, category } = req.body;

    try {

        // create new note
        const note = await Note.create({
            title,
            content,
            category,
            user: req.user.id
        });
            res.status(201).json(note);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error.'});
    }
}

// read by user
export const getNotes = async (req, res) => {
    try {
        // read notes
        const notes = await Note.find({user: req.user.id});
        res.json(notes);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error.'});
    }
}

// read by category
export const getNoteByCategory = async (req, res) => {
    const { category } = req.params;

    if (!category) {
        return res.status(400).json({ message: 'Category is required.' });
    }

    try {
        // read notes
        const notes = await Note.find({ user: req.user.id, category });
        res.json(notes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error.' });
    }
} 

// update
export const updateNote = async (req, res) => {
    const { title, content, category } = req.body;

    try {
        let note = await Note.findById(req.params.id);

        if(!note){
            return res.status(404).json({message: 'Note not found.'});
        }

        if(note.user.toString() !== req.user.id){
            return res.status(401).json({message: 'Unauthorized.'});
        }

        // update note
        note.title = title || note.title;
        note.content = content || note.content;
        note.category = category || note.category;

        const updatedNote = await note.save();
        res.json(updatedNote);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error.'});
    }
}

export const deleteNote = async (req, res) => {
    try {
        let note = await Note.findById(req.params.id);

        if(!note){
            return res.status(404).json({message: 'Note not found.'});
        }

        if(note.user.toString() !== req.user.id){
            return res.status(401).json({message: 'Unauthorized.'});
        }

        // delete note
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        res.json({message: 'Note deleted successfully.', note: deletedNote });

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server error.'});
    }
}