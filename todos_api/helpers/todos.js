var db = require("../models");

exports.getTodos = function(req, res) {
  db.Todo.find()
  .then(function(todos) {
    res.json(todos);
  })
  .catch(function(err){
    res.send(err);
  })
}

module.exports = exports;
