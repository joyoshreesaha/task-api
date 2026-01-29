const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Server is running properly');
});

app.use('/api/v1/tasks', taskRoutes);
app.use(errorHandler);

module.exports = app;
