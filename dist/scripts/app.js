(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
    });
    $stateProvider
      .state("timeTrack", {
        url: "/",
        controller: "TimeTrackCtrl as timeTrack",
        templateUrl: "/templates/timeTrack.html"
    });
  }
  angular
    .module("bloctime", ["ui.router", "firebase"])
    .config(config)
      .constant("TIMER", {
        "SESSION": 25,
        "BREAK": 5,
        "SESSION_MESSAGE": "Click to start Work",
        "BREAK_MESSAGE": "Click to start Break"
      });
})();