describe('checkPasswordStrength', function() {
  beforeEach(module('password'));

  it('パスワードが8文字以上の場合、強度がstrongになる', inject(function(checkPasswordStrength) {
    var password = 'dddddddddddddddddddddddddddddddd';
    expect(checkPasswordStrength(password.length)).toEqual('strong');
  }));
});