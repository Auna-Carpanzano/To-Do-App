var express = require("express"),
    router = express.Router(),
    db = require("../models");

// LIST ALL TODOS
router.route("/")
  .get(helpers.getTodos)
  .post(helpers.createTodo)

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
  .then(function(todo) {
    res.json(todo);
  })
  .catch(function(err) {
    res.send(err);
  })
});

// DELETE ROUTE
router.delete("/:todoId", function(req, res) {
  db.Todo.remove({_id: req.params.todoId})
  .then(function() {
    res.json({message: "To-do deleted!"})
  })
  .catch(function(err) {
    res.send(err)
  })
});

module.exports = router;
