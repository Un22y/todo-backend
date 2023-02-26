const Router = require('express');
const taskController = require('../controller/task.controller');
const router = new Router()

router.post('/tasks', taskController.createTask)

router.get('/tasks/', taskController.getAllTasks)
// router.get('/tasks/:id', taskController.getOneTask)

router.put('/tasks', taskController.updateTasks)

router.delete('/tasks/:id', taskController.deleteTask)


module.exports = router;