(function () {
  function TIMER() {
    var TIMER = {};
    
    TIMER.SESSION = 1500,
    TIMER.BREAK = 300,
    TIMER.SESSION_MESSAGE = "Click to start Work",
    TIMER.BREAK_MESSAGE ="Click to start Break",
    TIMER.LONGER_BREAK = 1800,
    TIMER.SESSION_COUNT = 4,
    TIMER.LONGER_BREAK_MESSAGE = "Click to start a longer break"

    return TIMER;
  }
  
  angular
    .module('bloctime')
    .constant('TIMER', TIMER());
})();

