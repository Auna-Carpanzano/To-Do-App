$(document).ready(function() {
  $.getJSON("/api/todos")
    .then(addTodos)
});

function addTodos(todos) {
  todos.forEach(function(todo) {
    var newTodo = $("<li>" + todo.name + "</li>");
    $(".list").append(newTodo);
  });
}
