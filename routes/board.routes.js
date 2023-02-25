const Router = require('express');
const boardController = require('../controller/board.controller');
const router = new Router()



router.post('/boards', boardController.createBoard)

router.get('/boards', boardController.getAllBoards)
router.get('/boards/:id', boardController.getOneBoard)

router.put('/boards', boardController.updateBoards)
router.put('/boards/:id', boardController.updateBoardsOrder)

router.delete('/boards/:id', boardController.deleteBoard)

module.exports = router;