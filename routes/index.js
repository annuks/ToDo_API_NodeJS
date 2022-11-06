//Calling the Express Server and Fetching Router
const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');


//importing respective controller
router.post("/signin",authController.signin);
router.post("/create-todo",authController.createTodo);
router.get('/todo', authController.todo);
router.patch('/update-todo/:id',authController.updateTodo)
router.delete('/todo/:id',authController.deleteTodo)





module.exports = router;