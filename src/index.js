'use strict';

var angular = require('angular');

module.exports = angular.module('demo', [])
  .run(function($templateCache) {
    $templateCache.put('demo.html', require('./demo.html'));
  })
  .directive('demo', require('./demo.directive.js'))
  .controller('DemoCtrl', require('./demo.controller.js'));
