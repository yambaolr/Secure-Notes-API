import express from 'express';
import { createNote, getNotes, getNoteByCategory, updateNote, deleteNote } from '../controllers/noteController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

// @route POST /api/notes
// @desc Create a new note
router.post('/', createNote);

// @route GET /api/notes
// @desc Get all notes for the authenticated user
router.get('/', getNotes);

// @route GET /api/notes/category/:category
// @desc Get notes by category for the authenticated user
router.get('/category/:category', getNoteByCategory);

// @route PUT /api/notes/:id
// @desc Update a note by ID
router.put('/:id', updateNote);

// @route DELETE /api/notes/:id
// @desc Delete a note by ID
router.delete('/:id', deleteNote);

export default router;