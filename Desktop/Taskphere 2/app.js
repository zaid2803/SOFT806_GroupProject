const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Health check endpoint for testing CI/CD
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'TaskSphere Backend operational - Updated by Zaid!',
    timestamp: new Date()
  });
});

// Sample TaskSphere backend route
app.get('/api/tasks', (req, res) => {
  res.status(200).json([
    { id: 1, title: 'Setup GitHub Repository', status: 'Completed' },
    { id: 2, title: 'Configure CI/CD Pipeline', status: 'In Progress' },
    { id: 3, title: 'Complete Code Review', status: 'To Do' }
  ]);
});

app.listen(PORT, () => {
  console.log(`TaskSphere Backend Server running on port ${PORT}`);
});

module.exports = app;