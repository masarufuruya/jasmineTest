angular.module('password', [])
  .factory('checkPasswordStrength', function() {
    return function(size) {
      if (size > 8) {
        return 'strong';
      } else if (size > 3) {
        return 'medium';
      } else {
        return 'weak';
      }
    }
  });