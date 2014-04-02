var angular = require('angular');

module.exports = angular.module('vn.productOptions', [])
  .run(function($templateCache) {
    $templateCache.put('views/product-options.html', require('./views/product-options.html'));
  })
  .directive('productOptions', require('./scripts/directives/product-options.directive.js'))
  .controller('productOptionsCtrl', require('./scripts/controllers/product-options.controller.js'));
