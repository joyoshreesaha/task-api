const express = require('express');
const controller = require('../controllers/taskController');

const router = express.Router();

router.get('/', controller.getTasks);
router.post('/', controller.createTask);

module.exports = router;
