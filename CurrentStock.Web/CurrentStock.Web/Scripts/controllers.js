'use strict';

// Google Analytics Collection APIs Reference:
// https://developers.google.com/analytics/devguides/collection/analyticsjs/

angular.module('app.controllers', [])

    // Path: /
    .controller('HomeCtrl', ['$scope', '$location', '$window', 'beerData', function ($scope, $location, $window, beerData) {
        $scope.$root.title = 'Schetzler Brewing';
        $scope.bottles = beerData.bottles;
        $scope.rightTap = beerData.rightTap;
        $scope.middleTap = beerData.middleTap;
        $scope.leftTap = beerData.leftTap;

        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    .controller('BoardGamesCtrl', ['$scope', '$location', '$window', 'boardGamesData', function ($scope, $location, $window, boardGameData) {
        $scope.$root.title = 'Board Games'
        boardGameData.then(function (data) {
            $scope.games = data;
        })


    }])

    // Path: /details
    .controller('DetailsCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Schetzler Brewing | Details';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }])

    // Path: /error/404
    .controller('Error404Ctrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
        $scope.$root.title = 'Error 404: Page Not Found';
        $scope.$on('$viewContentLoaded', function () {
            $window.ga('send', 'pageview', { 'page': $location.path(), 'title': $scope.$root.title });
        });
    }]);