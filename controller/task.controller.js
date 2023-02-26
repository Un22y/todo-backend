const db = require('../database/db');
const { json } = require('../database/neondb');
const neondb = require('../database/neondb')


class TaskController {
    async createTask(req,res) {
        const {name,description,board_id} = req.body;
        const newtask = await neondb`INSERT INTO tasks (name, description, board_id, is_done, created_time) values (${name}, ${description}, ${board_id}, ${false}, NOW()) RETURNING *`;
        const tasks = await neondb`SELECT * FROM tasks ORDER BY is_done, id`;
        res.send(tasks);
    }
    async getAllTasks(req,res) {
        const tasks = await neondb`SELECT * FROM tasks ORDER BY is_done, id`;
        res.send(tasks)
    }
    // async getOneTask(req,res) {
    //     const id = req.params.id
    //     const task = await neondb`SELECT * FROM tasks WHERE id = ${id}`
    //     res.json(task[0])
    // }
    async updateTasks(req,res) {
        const obj = JSON.parse(req.body);
        for (let prop in obj) {
            await neondb`UPDATE tasks SET ${prop} = ${obj[prop]} where id = ${obj.id}`
        }
        const task = neondb`SELECT * FROM tasks WHERE id = ${obj.id}`
        res.send(JSON.stringify(task[0]))
    }

    async deleteTask(req,res) {
        const id = req.params.id
        const task = await neondb`DELETE FROM tasks WHERE id = ${id}`
        const otherTasks = await neondb`SELECT * FROM TASKS ORDER BY is_done, id`
        res.send(otherTasks)
    }

}

module.exports = new TaskController();