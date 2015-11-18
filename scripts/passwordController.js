angular.module('app.controller', [])
  .controller('PasswordController', ['$scope', function($scope) {
    // パスワード
    $scope.password = '';

    // パスワード強度評価
    $scope.grade = function() {
      var size = $scope.password.length;

      if (size > 8) {
        $scope.strength = 'strong';
      } else if (size > 3) {
        $scope.strength = 'medium';
      } else {
        $scope.strength = 'weak';
      }
    };
  }]);