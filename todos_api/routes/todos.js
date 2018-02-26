var express = require("express"),
    router = express.Router(),
    db = require("../models");

router.get("/", function(req, res) {
  db.Todo.find()
  .then(function(todos) {
    res.json(todos);
  })
});

module.exports = router;
