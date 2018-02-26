$(document).ready(function() {
  $.getJSON("/api/todos")
    .then(addTodos)
});
