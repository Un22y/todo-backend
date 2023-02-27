const Router = require('express');
const boardController = require('../controller/board.controller');
const router = new Router()



router.post('/boards', boardController.createBoard)

router.get('/boards', boardController.getAllBoards)

router.put('/boards', boardController.updateBoards)

router.delete('/boards/:id', boardController.deleteBoard)

module.exports = router;