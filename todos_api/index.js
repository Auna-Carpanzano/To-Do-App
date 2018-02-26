var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000;

var todoRoutes = require("./routes/todos");

app.listen(port, function() {
  console.log("App is running");
});
