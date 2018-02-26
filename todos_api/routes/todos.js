var express = require("express"),
    router = express.Router(),
    db = require("../models");

// LIST ALL TODOS
router.get("/", function(req, res) {
  db.Todo.find()
  .then(function(todos) {
    res.json(todos);
  })
  .catch(function(err){
    res.send(err);
  })
});

// CREATE NEW TODO
router.post("/", function(req, res) {
  db.Todo.create(req.body)
  .then(function(newTodo) {
    res.status(201).json(newTodo);
  })
  .catch(function(err){
    res.send(err);
  })
});

// RETRIEVE INDIVIDUAL TODO
router.get("/:todoId", function(req, res) {
  db.Todo.findById(req.params.todoId)
  .then(function(foundTodo) {
    res.json(foundTodo);
  })
  .catch(function(err) {
    res.send(err);
  })
});

// UPDATE ROUTE
router.put("/:todoId", function(req, res) {
  db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
})

module.exports = router;
