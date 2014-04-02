'use strict';

// ReSharper disable WrongExpressionStatement
describe('Directive: vn.productOptions', function() {

  // load the directive's module
  beforeEach(module('vn.productOptions'));

  var $component;

  beforeEach(inject(function($rootScope, $compile) {
    var $scope = $rootScope.$new();
    var html = '<div data-product-options></div>';
    $component = $($compile(angular.element(html))($scope));
    $rootScope.$digest();
  }));

  it('does foo', function() {
    expect($component.html()).to.eq('<p>bar</p>');
  });
});
