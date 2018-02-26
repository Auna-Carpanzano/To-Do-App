var express = require("express"),
    router = express.Router(),
    db = require("../models");

router.get("/", function(req, res) {
  db.Todo.find()
  .then(function(todos) {
    res.json(todos);
  })
  .catch(function(err){
    res.send(err);
  })
});

router.post("/", function(req, res) {
  db.Todo.create(req.body)
});

module.exports = router;
