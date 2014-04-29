'use strict';

module.exports = [
  function() {

    return {
      restrict: 'A',
      scope: {
        title: '=',
        description: '=',
        keywords: '=',
        toAppend: '=',
        robots: '='
      },
      link: function(scope, elem) {

        var appendElement = function(elementToAppend) {
          if (typeof elementToAppend !== 'undefined') {
            elem.append(elementToAppend);
          }
        };

        var setTitleTag = function(titleText) {
          var titleTag = elem.find('title');
          if (titleTag.length > 0) {
            titleTag.remove();
          }
          if (titleText) {
            elem.append(angular.element('<title/>').text(titleText));
          }
        };

        var setMetaTag = function(metaTagName, metaTagContent) {
          var metaTag = elem.find('meta[name=' + metaTagName + ']');

          if (metaTag.length > 0) {
            metaTag.remove();
          }
          if (metaTagContent) {
            elem.append(angular.element('<meta/>').attr('name', metaTagName).
              attr('content', metaTagContent));
          }
        };

        var setDescription = function(description) {
          setMetaTag('description', description);
        };

        var setKeywords = function(keywords) {
          setMetaTag('keywords', keywords);
        };

        scope.$watch('title', setTitleTag);
        scope.$watch('description', setDescription);
        scope.$watch('keywords', setKeywords);

        setTitleTag(scope.title);
        setDescription(scope.description);
        setKeywords(scope.keywords);
        appendElement(scope.toAppend);

        if (typeof scope.robots !== 'undefined' &&
          JSON.parse(scope.robots) === true) {
          setMetaTag('robots', 'index,follow');
          setMetaTag('GOOGLEBOT', 'INDEX,FOLLOW');
        }
      }
    };
  }
];
