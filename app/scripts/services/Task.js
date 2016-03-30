(function () {
  function Task($firebaseArray) {
    var Task = {};
    
    var taskRef = new Firebase("https://dazzling-inferno-8817.firebaseio.com/tasks");
    var tasks = $firebaseArray(taskRef);
    
    Task.all = tasks;
    
    Task.add = function(task) {
      tasks.$add({
        name: task.name
      });
    };
    
    return Task;
  }
  
  angular
    .module('bloctime')
    .factory('Task', ["$firebaseArray", Task]);
})();