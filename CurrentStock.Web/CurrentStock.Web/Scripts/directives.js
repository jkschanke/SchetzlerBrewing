'use strict';

angular.module('app.directives', [])

    .directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };

    }])

    .directive('beer', function () {
        return {
            scope: {
                beer: '=info'
            },
            //controller: function($scope){
            //    $scope.calculateABV = function (originalGravity, finalGravity) {
            //        return (originalGravity - finalGravity) * 131;
            //    }
            //},
            restrict: 'E',
            templateUrl: 'Views/BeerItem.html'
        };
    });