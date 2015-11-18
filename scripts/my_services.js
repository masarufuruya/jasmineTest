angular.module('MyServices', [])
  .factory('HelloService', function() {
    function addName(name) {
      return 'Hello ' + name;
    }

    return addName;
  });