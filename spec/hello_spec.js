describe('helloテスト', function() {
  beforeEach(module('MyServices'));

  it('HelloServiceのテスト', inject(function(HelloService) {
    expect(HelloService('Masaru')).toEqual('Hello Masaru');
  }));
});