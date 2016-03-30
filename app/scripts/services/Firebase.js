(function () {
  function Firebase($firebaseArray) {
    var taskRef = new Firebase("https://dazzling-inferno-8817.firebaseio.com/");
    var tasks = $firebaseArray(taskRef);
    return Firebase;
      }
  
  angular
    .module('bloctime')
    .factory('Firebase', ["$firebaseArray", Firebase]);
})();