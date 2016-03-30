(function() {
  function TimeTrackCtrl(TIMER, $firebaseArray, $interval) {
    var vm= this;
    
    vm.timeLeft  = TIMER.SESSION;
    vm.startWorkSession = startWorkSession;
    vm.takeABreak = takeABreak;
    vm.reset = reset;
    vm.onBreak = false;
    vm.working = false;
    vm.buttonMsg = TIMER.SESSION_MESSAGE;
    
    
    vm.tasks = [];
    vm.newTask = {};
    vm.addTask = addTask;
    vm.taskText = "";
    
    activate();
    function activate() {
      var taskRef = new Firebase("https://dazzling-inferno-8817.firebaseio.com//tasks/");
      vm.tasks = $firebaseArray(taskRef);
       };
      
    function addTask() {
      vm.tasks.$add({
        task: vm.taskText,
       });
      return addTask;
      vm.taskText = ""
      activate();
    };
    
    var timer;
    var completeWorkSessions = 0;
    
    var mySound = new buzz.sound("/assets/ding.mp3", {
      preload: true
    });

    function startWorkSession() {
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


    function takeABreak() {
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

    function reset() {
      $interval.cancel(timer);
      vm.onBreak = false;
      vm.timeLeft = TIMER.SESSION;
      vm.buttonMsg = TIMER.SESSION_MESSAGE;
      vm.working = false;
    }
  };

    
  angular
    .module('bloctime')
    .controller('TimeTrackCtrl', ['TIMER', '$firebaseArray', '$interval', TimeTrackCtrl]);
})();