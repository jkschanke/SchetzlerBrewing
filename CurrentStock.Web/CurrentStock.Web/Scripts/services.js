'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])
    .factory('beerData', function () {
        var instance = {};

        instance.bottles = [
            {  name: 'Speckled Heifer', style: 'American Pale Ale/Cream Ale', type: 'Partial Mash', brewDate: '07/27/2015', originalGravity: 1.044, finalGravity: 1.010, description: 'A tranquil time-out in a pint glass, a pastoral idyll, a sociable session ale dairyland-style: hey, sometimes a beer is just a beer. Have one.', icon: '/content/images/speckled heifer.jpg', capCodes: ['SH'] },
            { name: 'Gaarden Hoe Witbier', style: 'Trappist/Belgian Ale, Wheat Beers', type: 'Extract', brewDate: '07/14/2015', originalGravity: 1.049, finalGravity: 1.010, description: 'The perfect pint after a hard day’s work, Gaarden Hoe is an ode to the historic and refreshing Belgian wit. Classic wheat is expertly tilled into a traditional pilsner malt bill and modest, grounded hop profile. Coriander and bitter orange peel offer slightly tart and citrusy undertones to quench even the most parched palate.', icon: '/content/images/garden hoe.jpg', capCodes: ['GH'] }
        ]

        instance.leftTap = {
            
        }

        instance.middleTap = {
            
        }

        instance.rightTap = {
            name: 'Dark Cherry Stout', style: 'Spice or Fruit Beer, Stout/Porter', type: 'Extract', brewDate: '09/09/2015', originalGravity: 1.052, finalGravity: 1.018, description: 'A classic dry stout, black in color, with the sharp bite of roasted barley and laced with cherry extract. Not overpowering like many fruit beers, this is a more restrained brew.', icon: '/content/images/darkcherrystout.jpg'
        }

        return instance;
    })
    .factory('boardGamesData', ['$http', function ($http) {
        //https://www.boardgamegeek.com/xmlapi2/collection?username=jkschanke&own=1


        return $http.jsonp('https://www.boardgamegeek.com/xmlapi2/collection?username=jkschanke&own=1&callback=JSON_CALLBACK', {
            transformResponse: function (data) {
                var x2js = new X2JS();
                var json = x2js.xml_str2json(data);
                return json;
            }})
            .then(function (data) {
                return data.data;
            })
    }])