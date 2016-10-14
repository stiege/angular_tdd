
describe('JavaScript addition operator', function () {
    it('adds two numbers together', function () {
        expect(1 + 2).toEqual(3);
    });
});

describe('ngInclude Unit Test', function() {
  var $compile;
  var $rootScope;
  var $templateCache;
  //console.log('---- new test ---');

  beforeEach(inject(function(_$compile_, _$rootScope_, _$templateCache_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $templateCache = _$templateCache_;
    $templateCache.put('url1.html', '<div>result11111</div>');
  }));


  it('simple ngInclude', function() {
    var element = $compile(
      '<div><div ng-include="\'url1.html\'"></div></div>')($rootScope);
    $rootScope.$digest();
    expect(element.html()).toContain("result11111");
  });
});