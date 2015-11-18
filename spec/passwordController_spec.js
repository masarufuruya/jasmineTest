describe('PasswordControllerのテスト', function() {
  // モジュールをロード(angular-mocks)
  // beforeEachはテスト前に実行する処理
  beforeEach(module('app.controller'));

  var $controller;
  // $controllerサービスをインジェクト
  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  // describe(テストをグルーピングするもの。ネストもできる)
  describe('$scope.grade', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('PasswordController', {
        $scope: $scope
      });
    })

    it('パスワードが8文字以上の場合、強度がstrongになる', function() {
      $scope.password = 'ldewewewewewewewes';
      $scope.grade();
      // 結果がstrong
      expect($scope.strength).toEqual('strong');
    });

    it('パスワードが3文字未満だと、強度がweak', function() {
      $scope.password = 'a';
      $scope.grade();
      expect($scope.strength).toEqual('weak');
    });
  });
});