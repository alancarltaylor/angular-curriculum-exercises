var app = angular.module('myApp', []);

app.directive("todoList", function($scope){
return {
  controller: function($scope) {
    this.view = {};
    

  },

}


})

app.directive("todoItem", function($scope){
return {
  require: '^gsParent',

}

})
