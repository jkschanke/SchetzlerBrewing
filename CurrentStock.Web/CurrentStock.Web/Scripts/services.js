'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])
    .factory('beerData', function () {
        var instance = {};
        // ABV equation (OG - FG)*131 = %
        instance.beers = [
            { name: 'Smashing Pumpkin', brewDate: '08/08/2013', og: 1.080, fg: 1.010, abv: '', description: 'description', icon: '/content/images/smashingpumpkin.jpg', ibu: 2.2, onTap: false },
            {}
        ]

        return instance;
    })