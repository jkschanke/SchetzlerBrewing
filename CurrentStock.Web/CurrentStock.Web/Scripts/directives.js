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
                beer: '='
            },
            restrict: 'E',
            templateUrl: 'Views/BeerItem.html'
        };
    })
    .directive('boardgame', function () {
        return {
            scope: {
                game: '='
            },
            restrict: 'E',
            templateUrl: 'Views/BoardGame.html'
        };
    });
