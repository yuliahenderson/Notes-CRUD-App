const db = require('../config/db');
const sql = require('../config/sqlProvider').notes;
const Note = require('../models/note');

class NoteDAO {
  static create({ body, user_id }) {
    return db.one(sql.create, [body, user_id])
             .then((data) => new Note(data));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
  static searchBy(keyValue) {
    const key = Object.keys(keyValue)[0];
    const value = keyValue[key];
    return db.map(sql.find, [key, value], (row) => new Note(row));
  }
}

module.exports = NoteDAO;
