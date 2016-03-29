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
        "SESSION": 5,
        "BREAK": 2,
        "SESSION_MESSAGE": "Click to start Work",
        "BREAK_MESSAGE": "Click to start Break",
        "LONGER_BREAK": 10,
        "SESSION_COUNT": 4,
        "LONGER_BREAK_MESSAGE": "Click to start a longer break"
      });
})();