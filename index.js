const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const cors = require('cors');
const boardRouter = require('./routes/board.routes')
const taskRouter = require('./routes/task.routes')

const PORT = process.env.PORT || 8080

const app = express();

app.use(cors())
app.use(express.json())

app.use('/api', boardRouter);
app.use('/api', taskRouter);


app.listen('https://todo-backend-git-master-un22y.vercel.app/', () => {});