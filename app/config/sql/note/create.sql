INSERT INTO notes (body, user_id) VALUES($1, $2) RETURNING *;
