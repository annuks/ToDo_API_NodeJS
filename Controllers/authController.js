//importing  User schema from model
const User = require('../model/User');
const Todo = require('../model/Todo');
//using jwt for login authentication
const jwt = require("jsonwebtoken");


module.exports.signin = async function (req, res) {
    try {
      //if sign-in  details is invalid
      let user = await User.findOne({ email:req.body.email });
      if (!user || user.password != req.body.password) {
        return res.json(402, {
          message: "Invalid Credentials",
          success : false
        });
      }
  // if sign-in details are correct
      return res.json(200, {
        message: "Sign In Succesfull, Here is your Token",
        success: true,
        data: {
          token: jwt.sign(user.toJSON(), "equivotask", { expiresIn: "1800000" }),
        },
      });
    } catch (err) {
      console.log(" Error in JWT", err);
      return res.json(500, {
        message: "Internal Server error",
      });
    }
  };
  
  //create to do

  module.exports.createTodo = async (req, res) => {
    try {
      
        const todos = await Todo.create({
          title:req.body.title,
        });
      
        todos.save();
        return res.json(200, {
          message: "To-Do Created Succesfully",
          success: true,
        });
    } catch (err) {
      console.log("********", err);
      return res.json(500, {
        success: false,
        message: " **Internal Server Error",
      });
    }
  };
  

  //getting list of to do

  module.exports.todo = async (req, res) => {
    try {
      let todos;
        if(req.query.page && req.query.pageSize && req.query.fromDate && req.query.toDate){
           todos = await Todo.find({
            date: {
              $gte: new Date(req.query.fromDate),   // - mm/dd/yy
              $lte: new Date(req.query.toDate)
            }
          }).skip(req.query.page-1).limit(req.query.pageSize);
        }else{
           todos = await Todo.find();
        }
        console.log(req.query, new Date(req.query.toDate))


       
        return res.json(200, {
          message: "Todo List Generated",
          success: true,
          data: {
            todos
          },
        });
      }
      catch (err) {
      console.log("********", err);
      return res.json(500, {
          success: false,
          message: " **Internal Server Error**",
      });
    }
  }


 module.exports.deleteTodo = async (req, res) => {
    try {
      
      const todos = await Todo.findByIdAndDelete(req.params.id)
      console.log(req.params)
      return res.json(200, {
        message: "Todo Deleted SuccessFull",
        success: true,
        deleted : todos
      });
    } catch (err) {
      console.log("********", err);
      return res.json(500, {
        success: false,
        message: " **Internal Server Error",
      });
    }
  };


 module.exports.updateTodo = async (req, res) => {
    try {
      
      const todos = await Todo.findByIdAndUpdate(req.params.id,req.body)
      todos.save();
      return res.json(200, {
        message: "Todo Updated SuccessFull",
        success: true
      });
    } catch (err) {
      console.log("********", err);
      return res.json(500, {
        success: false,
        message: " **Internal Server Error",
      });
    }
  };