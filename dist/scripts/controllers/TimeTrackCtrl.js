(function() {
  function TimeTrackCtrl(TIMER, $interval) {
    var vm= this;
    
    vm.timeLeft  = TIMER.SESSION;
    vm.startWorkSession = startWorkSession;
    vm.takeABreak = takeABreak;
    vm.reset = reset;
    vm.working = false;
    vm.onBreak = false;
    vm.buttonMsg = TIMER.SESSION_MESSAGE;
    
    var timer;
    var completeWorkSessions = 0;

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

//  angular.extend(this, {
//    timeLeft: 'TIMER'.SESSION,
//    startWorkSession: startWorkSession,
//    takeABreak: takeABreak,
//    reset: reset,
//    working: false,
//    onBreak: false,
//    buttonMsg: TIMER.SESSION_MESSAGE
//  });
//  
    
  angular
    .module('bloctime')
    .controller('TimeTrackCtrl', ['TIMER', '$interval', TimeTrackCtrl]);
})();