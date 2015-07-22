'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
.directive('venkat', function () {

    return {
        scope: {},
        restrict: 'E',
        template: ['<p title ="I am a directive">',
        'Hello I am IndiaG  and I am writing a thesis on Single page applications ',
        '</p>'].join(''),
        link: function (scope, element, attrs) {
            var katattr = attrs.mycolor || "red";
            element.bind('mouseover', function (e) {
                element.css("color", katattr);
            });
            element.bind('mouseleave', function (e) {
                element.css("color", "black");
            });
        }
    }
});
