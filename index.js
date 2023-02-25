const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const cors = require('cors');
const boardRouter = require('./routes/board.routes')
const taskRouter = require('./routes/task.routes')

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api', boardRouter);
app.use('/api', taskRouter);

app.listen(5000, () => console.log('Server started'));

module.exports = app;
