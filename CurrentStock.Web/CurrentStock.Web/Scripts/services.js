'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])
    .factory('beerData', function () {
        var instance = {};

        instance.bottles = [
            { name: 'Fruity Saison', capCodes: ['SS: Strawberry', 'SC: Cherry', 'SCN: Cranberry'], style: 'Saison/Farmhouse Ale', type: 'Extract', brewDate: 'April 2014', code: 'SS, SC, SCN', originalGravity: 1.041, finalGravity: 1.010, description: 'This session-strength Saison of summer perfumes the air with tangy yeast and pungent hop aromas.', icon: '/content/images/saison.jpg', ibu: 47 },
            { name: 'Holiday Red', capCodes: ['HR'], style: 'Amber Ale', type: 'Extract', brewDate: 'November 2013', code: 'HR', originalGravity: 1.062, finalGravity: 1.020, description: 'This strong-ish American amber ale is built for the cold: a substantial gravity for snowy weather, but a fast turnaround so you can get some holiday cheer from fermentor to pint ASAP. Malty but not too sweet, just enough bitterness to balance, a definite but not overstated citrus hop profile (bolstered by real citrus!), this is far from your normal holiday ale.', icon: '/content/images/holidayred.jpg', ibu: 29 }
        ]

        instance.leftTap = {
            name: 'West Coast Radical Red Ale', style: 'Amber Ale', type: 'Extract', brewDate: '08/17/2014', originalGravity: 1.055, finalGravity: 1.010, description: 'A gorgeous yet unassuming crimson-colored brew, West Coast Radical Red Ale is strikingly familiar in its smooth, copper body and distinctively American, crisp clean character.', icon: '/content/images/radicalred.jpg', ibu: 75

        }

        instance.middleTap = {

        }

        instance.rightTap = {
            name: 'Mint Chocolate Milk Stout', style: 'Stout', type: 'Extract', brewDate: '08/05/2014', originalGravity: 1.048, finalGravity: 1.022, description: 'A milk stout (brewed with lactose sugar for body and residual sweetness) laced with pure cacao nibs and fresh peppermint in secondary.', icon: '/content/images/milkstout.jpg', ibu: 31
        }

        return instance;
    })
    .factory('boardGamesData', ['$http', function ($http) {
        return $http.get('http://bgg-json.azurewebsites.net/collection/jkschanke?grouped=true')
            .then(function (data) {
                return data.data;
            })
    }])