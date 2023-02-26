const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const cors = require('cors');
const boardRouter = require('./routes/board.routes')
const taskRouter = require('./routes/task.routes')

const options = {
    setHeaders: function (res, path, stat) {
        res.set('Access-Control-Allow-Origin','*')
    }
}

const app = express();

app.use(express.json());
app.use(express.static('public', options))
app.use(cors());

app.use('/api', boardRouter);
app.use('/api', taskRouter);

app.listen(5000, () => console.log('Server started'));

module.exports = app;
