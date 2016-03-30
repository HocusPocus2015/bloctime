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
})();