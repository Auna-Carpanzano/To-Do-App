$(document).ready(function() {
  $.getJSON("/api/todos")
    .then(addTodos)
});

function addTodos(todos) {
  todos.forEach(function(todo) {

  })
}
