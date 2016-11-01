const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  users: {
    all: sql('./sql/user/all.sql'),
    find: sql('./sql/user/find.sql'),
    create: sql('./sql/user/create.sql'),
    delete: sql('./sql/user/delete.sql'),
  },
  notes: {
    all: sql('./sql/note/all.sql'),
    create: sql('./sql/note/create.sql'),
    delete: sql('./sql/note/delete.sql'),
    find: sql('./sql/note/find.sql'),
  },
};

module.exports = sqlProvider;
