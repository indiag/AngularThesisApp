

'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view1', { templateUrl: 'partials/partial1.html', controller: 'MyCtrl1' });
    $routeProvider.when('/view2', { templateUrl: 'partials/partial2.html', controller: 'MyCtrl2' });
    $routeProvider.when('/view3', { templateUrl: 'partials/partial3.html', controller: 'MyCtrl3' });
    $routeProvider.when('/view4', { templateUrl: 'partials/partial4.html', controller: 'MyCtrl4' });
    $routeProvider.when('/view5', { templateUrl: 'partials/partial5.html', controller: 'MyCtrl5' });
    $routeProvider.when('/view6', { templateUrl: 'partials/partial6.html', controller: 'MyCtrl6' });
    $routeProvider.when('/view9', { templateUrl: 'partials/partial9.html', controller: 'MyCtrl9' });


  


    $routeProvider.otherwise({ redirectTo: '/view1' });
}]);

var app = angular.module('MyApp', []);

app.controller('MainController', function ($scope) {

    $scope.$watch('decimal', function () {
        var temp = parseInt($scope.decimalv, 10).toString(2);
        if (temp !== 'NaN') {
            $scope.binary = temp + " (binary)"
        }
    });
});
