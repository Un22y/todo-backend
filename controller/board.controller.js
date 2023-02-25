const db = require('../database/db')
const neondb = require('../database/neondb')

class BoardController {
    async createBoard(req,res) {
        const {name} = req.body;
        const newBoard = await neondb`INSERT INTO boards (name) values (${name}) RETURNING *`;
        const boards = await neondb`SELECT * FROM boards ORDER BY id`;
        res.send(boards)
    }
    async getAllBoards(req,res) {
        const boards = await neondb`SELECT * FROM boards ORDER BY id`;
        console.log(boards)
        res.send(boards)
    }
    async getOneBoard(req,res) {
        const id = req.params.id
        const board = await neondb`SELECT * FROM boards WHERE id = ${id}`
        res.json(board[0])
    }
    async updateBoards(req,res) {
        const {id, name} = req.body;
        const board = await neondb`UPDATE boards SET name = ${name} where id = ${id} RETURNING *`
        res.json(board[0])
    }
    async updateBoardsOrder(req,res) {
        const id = req.params.id;
        const order_id = req.body.order.id
        const board = await neondb`UPDATE boards SET order_id = ${order_id} WHERE id = ${id}`
        const boards = await neondb`SELECT * FROM boards`
        res.send(boards)
    }
    async deleteBoard(req,res) {
        const id = req.params.id
        await neondb`DELETE FROM tasks WHERE board_id =${id}`;
        await neondb`DELETE FROM boards WHERE id = ${id}`
        const otherBoards = await neondb`SELECT FROM boards ORDER BY id`;
        res.send(otherBoards)
    }

}

module.exports = new BoardController();