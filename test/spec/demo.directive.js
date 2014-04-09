'use strict';

// ReSharper disable WrongExpressionStatement
describe('Directive: demo', function() {

  // load the directive's module
  beforeEach(module('demo'));

  var $component;

  beforeEach(inject(function($rootScope, $compile) {
    var $scope = $rootScope.$new();
    var html = '<div data-demo></div>';
    $component = $($compile(angular.element(html))($scope));
    $rootScope.$digest();
  }));

  it('contains demo text', function() {
    expect($component.html()).to.eq('<p>This is the demo view.</p>');
  });
});
