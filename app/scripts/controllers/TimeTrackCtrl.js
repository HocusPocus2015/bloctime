(function() {
  function TimeTrackCtrl($scope, $interval) {
    var ctrl= this;
    ctrl.totalTime = 1500000;

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
      }, 100);
    };

    ctrl.stopFight = function() {
      if (angular.isDefined(timer)) {
        $interval.cancel(timer);
        timer = undefined;
      }
    };

    ctrl.resetFight = function() {
      ctrl.totalTime = 1500000;
    };

  }
  
  
    
  angular
    .module('bloctime')
    .controller('TimeTrackCtrl', ['$scope', '$interval', TimeTrackCtrl]);
})();