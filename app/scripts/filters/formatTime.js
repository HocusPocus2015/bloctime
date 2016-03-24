(function() {
  function formatTime() {
    return function(ms) {
      var output = '';
      var ms = Number.parseFloat(ms);
      if (Number.isNaN(ms)) {
        return "-:--";
      }
      
      var seconds = Math.floor(ms % 60);
      var minutes = Math.floor(ms / 60);
      
      var output = minutes + ":";
      if (seconds < 10) {
        output += "0";
      }
      output += seconds;
      return output;
    };
  }
  angular
    .module('bloctime')
    .filter('formatTime', formatTime)
})();
