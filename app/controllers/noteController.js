const NoteDAO = require('../services/noteDAO');

class NoteController {
  static getAllOfCurrentUser(req, res) {
    NoteDAO.searchBy({ user_id: req.session.currentUser.id }).then((notes) => {
      res.status(200).json(notes);
    });
  }
  static create(req, res) {
    const noteData = {
      body: req.body.body,
      user_id: req.session.currentUser.id,
    };
    NoteDAO.create(noteData)
           .then((note) => res.status(200).json(note));
  }
  static delete(req, res) {
    NoteDAO.delete(req.params.id)
           .then(() => res.status(204).end());
  }
}

module.exports = NoteController;
