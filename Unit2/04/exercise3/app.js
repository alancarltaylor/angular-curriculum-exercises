angular.module("todoApp", ["ngRoute"]).config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'templates/todos.html',
    controller: 'TodoController'
  })
}).service('todoService', function(){
  var todos = []
  return {
    getTodos: function(){
      return todos;
    },
    addTodo: function(todo){
      todo.editFormShowing = false;
      todos.push(todo);
    },
    editTodo: function(index,todo){
      todos[index].task = todo.task
      todos[index].editFormShowing = false
    },
    removeTodo: function(index){
      todos.splice(index, 1);
    }
  }
})
.controller("TodoController", ["$scope", "todoService", function($scope, todoService){

  $scope.todos = todoService.getTodos();

  $scope.toggleEditForm = function(todo){
    todo.editFormShowing = !todo.editFormShowing;
  }

  $scope.addTodo = function(todo){
    // clear form values and validations
    $scope.todoForm.$setPristine()
    todoService.addTodo(todo);
    $scope.todo = {}
  }

  $scope.editTodo = function(idx, todo){
    todoService.editTodo(idx, todo);
  }

  $scope.removeTodo = function(todo){
    todoService.removeTodo(todo);
  }
  }])
