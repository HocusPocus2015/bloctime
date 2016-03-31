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
    
    Task.delete = function(task) {
      var index = -1;
      var allOfThem = eval(tasks);
      for (var i = 0; i < tasks.length; i++) {
        if (allOfThem[i].task === task) {
          index = i;
          break;
        }
      }
      tasks.splice(index, 1);
    };


    return Task;
  }
  
  angular
    .module('bloctime')
    .factory('Task', ["$firebaseArray", Task]);
})();