//(function() {
//  function time() {
//    return function(ms) {
//      var ms = Number.parseFloat(ms);
//      if (Number.isNaN(ms)) {
//        return "-:--";
//      }
//      
//      var minutes = Math.floor(ms / 60);
//      var seconds = Math.floor(ms % 60);
//      
//      var output = minutes + ":";
//      if (seconds < 10) {
//        output += "0";
//      }
//      output += seconds;
//      return output;
//    };
//  }
//  angular
//    .module('bloctime')
//    .filter('time', time);
//})();

function() {
  function time() {
    return function(timeTrack.totalTime) {
      var seconds = Math.floor(timeTrack.totalTime / 1000);
      var days = Math.floor(seconds / 86400);
      var hours = Math.floor((seconds % 86400) / 3600);
      var minutes = Math.floor(((seconds % 86400) % 3600) / 60);
      var timeString = '';
      if(days > 0) timeString += (days > 1) ? (days + " days ") : (days + " day ");
      if(hours > 0) timeString += (hours > 1) ? (hours + " hours ") : (hours + " hour ");
      if(minutes >= 0) timeString += (minutes > 1) ? (minutes + " minutes ") : (minutes + " minute ");
      return timeString;
    }
  }
  angular
    .module('bloctime')
    .filter('time', time);
})();
