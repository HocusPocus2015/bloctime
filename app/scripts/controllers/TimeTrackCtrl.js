(function() {
  function TimeTrackCtrl($scope, $interval) {
    var ctrl= this;
    var currentTime = 1500
    ctrl.totalTime = currentTime;

    var timer;
    ctrl.startWorkSession = function() {
      console.log("working");
      if ( angular.isDefined(timer) ) return;
      
      timer = $interval(function() {
        if (ctrl.totalTime > 0) {
          ctrl.totalTime = ctrl.totalTime- 1;
        }
        else {
          ctrl.stopFight();
        }
      }, 1000);
    };

    ctrl.takeABreak = function() {
      if (angular.isDefined(timer)) {
        $interval.cancel(timer);
        timer = undefined;
      }
    };

    ctrl.reset = function() {
      ctrl.totalTime = currentTime;
    };

  }
  
  
    
  angular
    .module('bloctime')
    .controller('TimeTrackCtrl', ['$scope', '$interval', TimeTrackCtrl]);
})();