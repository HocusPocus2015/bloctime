(function() {
  function timeTrackCtrl($scope, $interval) {
    $scope.track_25 = 1500000;

    var stop;
    $scope.fight = function() {
      if ( angular.isDefined(stop) ) return;
      
      stop = $interval(function() {
        if ($scope.track_25 > 0) {
          $scope.track_25 = $scope.track_25 - 1;
        }
        else {
          $scope.stopFight();
        }
      }, 100);
    };

    $scope.stopFight = function() {
      if (angular.isDefined(stop)) {
        $interval.cancel(stop);
        stop = undefined;
      }
    };

    $scope.resetFight = function() {
      $scope.track_25 = 1500000;
    };

    $scope.$on('$destroy', function() {
      $scope.stopFight();
    });
  }
  
  
    
  angular
    .module('bloctime')
    .controller('TimeTrackCtrl', ['$interval', TimeTrackCtrl]);
})();