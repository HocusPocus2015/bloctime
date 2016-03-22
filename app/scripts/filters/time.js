(function() {
  function time() {
    return function(ms) {
      var ms = Number.parseFloat(ms);
      if (Number.isNaN(ms)) {
        return "-:--";
      }
      
      var minutes = Math.floor(ms / 60);
      var seconds = Math.floor(ms % 60);
      
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
    .filter('time', time);
})();