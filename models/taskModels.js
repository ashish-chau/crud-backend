const db = require('../config/db');

exports.createTask = (task, callback) => {
  const query = 'INSERT INTO tasks (title, description, status, dueDate, userId) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [task.title, task.description, task.status, task.dueDate, task.userId], callback);
};

exports.getTasksByUser = (userId, callback) => {
  db.query('SELECT * FROM tasks WHERE userId = ?', [userId], callback);
};

exports.updateTask = (id, userId, task, callback) => {
  const query = 'UPDATE tasks SET title = ?, description = ?, status = ?, dueDate = ? WHERE id = ? AND userId = ?';
  db.query(query, [task.title, task.description, task.status, task.dueDate, id, userId], callback);
};

exports.deleteTask = (id, userId, callback) => {
  db.query('DELETE FROM tasks WHERE id = ? AND userId = ?', [id, userId], callback);
};
