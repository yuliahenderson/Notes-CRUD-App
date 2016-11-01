const express = require('express');
const NoteController = require('../controllers/noteController');

const router = express.Router();

router.get('/', NoteController.getAllOfCurrentUser);
router.post('/', NoteController.create);
router.delete('/:id', NoteController.delete);

module.exports = router;
