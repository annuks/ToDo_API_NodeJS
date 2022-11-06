//Calling the Express Server and Fetching Router
const express = require('express');
const router = express.Router();
const passport = require('passport');
const authController = require('../Controllers/authController');


//importing respective controller
router.post("/signin",authController.signin);
router.post("/create-todo",passport.authenticate('jwt', { session: false }),authController.createTodo);
router.get('/todo', passport.authenticate('jwt', { session: false }),authController.todo);
router.patch('/update-todo/:id',passport.authenticate('jwt', { session: false }),authController.updateTodo)
router.delete('/todo/:id',passport.authenticate('jwt', { session: false }),authController.deleteTodo)





module.exports = router;