const Task = require('../models/taskModels');

exports.createTask = (req, res) => {
  const { title, description, dueDate } = req.body;
  const newTask = {
    title,
    description,
    status: 'pending',
    dueDate,
    userId: req.user.id
  };

  Task.createTask(newTask, (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to create task' });
    res.status(201).json({ message: 'Task created successfully' });
  });
};

exports.getTasks = (req, res) => {
  Task.getTasksByUser(req.user.id, (err, tasks) => {
    if (err) return res.status(500).json({ error: 'Failed to fetch tasks' });
    res.json(tasks);
  });
};

exports.updateTask = (req, res) => {
  const taskId = req.params.id;
  const { title, description, status, dueDate } = req.body;

  Task.updateTask(taskId, req.user.id, { title, description, status, dueDate }, (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to update task' });
    res.json({ message: 'Task updated successfully' });
  });
};

exports.deleteTask = (req, res) => {
  Task.deleteTask(req.params.id, req.user.id, (err, result) => {
    if (err) return res.status(500).json({ error: 'Failed to delete task' });
    res.json({ message: 'Task deleted successfully' });
  });
};
