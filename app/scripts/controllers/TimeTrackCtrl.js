(function() {
  function TimeTrackCtrl(TIMER, Task, $interval) {
    var vm= this;

    vm.timeLeft  = TIMER.SESSION;
    vm.buttonMsg = TIMER.SESSION_MESSAGE;
    vm.tasks = Task.all;
    
    vm.addTask = function() {
      Task.add(vm.task);
      vm.task.name = ""
    };
    
    vm.deleteTask = function() {
      Task.delete(vm.task);
    };
    
    var timer;
    var completeWorkSessions = 0;
    
    var mySound = new buzz.sound("/assets/ding.mp3", {
      preload: true
    });

    vm.startWorkSession = function() {
      vm.working = true;
      timer = $interval(function() {
        vm.timeLeft = vm.timeLeft - 1;
        if (vm.timeLeft <= 0) {
          $interval.cancel(timer);
          vm.onBreak = true;
          vm.timeLeft = TIMER.BREAK;
          vm.buttonMsg = TIMER.BREAK_MESSAGE;
          vm.working = false;
          mySound.play();
          completeWorkSessions++;
          if (completeWorkSessions % TIMER.SESSION_COUNT == 0) {
            vm.timeLeft = TIMER.LONGER_BREAK;
            vm.buttonMsg = TIMER.LONGER_BREAK_MESSAGE;
          }
        };
      }, 1000);
      vm.buttonMsg = "Timer Running";
      return timer;
    };

    vm.takeABreak = function() {
      vm.working = true;
      timer = $interval(function() {
        vm.timeLeft = vm.timeLeft - 1;
        if (vm.timeLeft <= 0) {
          $interval.cancel(timer);
          vm.onBreak = false;
          vm.timeLeft = TIMER.SESSION;
          vm.buttonMsg = TIMER.SESSION_MESSAGE;
          vm.working = false;
          mySound.play();
        };
      }, 1000);
      vm.buttonMsg = "Timer Running";
      return timer;
    };

    vm.reset = function() {
      $interval.cancel(timer);
      vm.onBreak = false;
      vm.timeLeft = TIMER.SESSION;
      vm.buttonMsg = TIMER.SESSION_MESSAGE;
      vm.working = false;
    };
      
  };

    
  angular
    .module('bloctime')
    .controller('TimeTrackCtrl', ['TIMER', 'Task', '$interval', TimeTrackCtrl]);
})();