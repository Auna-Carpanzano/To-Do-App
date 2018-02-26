var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require("body-parser");

var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/api/todos", todoRoutes);

// ROOT ROUTE
app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.listen(port, function() {
  console.log("App is running");
});
