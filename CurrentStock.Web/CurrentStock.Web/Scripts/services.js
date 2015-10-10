'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])
    .factory('beerData', function () {
        var instance = {};

        instance.bottles = [
            { name: 'Orange Chocolate Stout', style: 'Stout', type: 'All-Grain', brewDate: '05/06/2015', originalGravity: 1.045, finalGravity: 1.010, description: 'Stout brewed with orange peel and cocoa powder for a chocolatey finish. This kind of sucks, try at your own risk', icon: '/content/images/peatsmokedporter.jpg', capCodes: ['OC'] },
            { name: 'Speckled Heifer', style: 'American Pale Ale/Cream Ale', type: 'Partial Mash', brewDate: '07/27/2015', originalGravity: 1.044, finalGravity: 1.010, description: 'A tranquil time-out in a pint glass, a pastoral idyll, a sociable session ale dairyland-style: hey, sometimes a beer is just a beer. Have one.', icon: '/content/images/speckled heifer.jpg', capCodes: ['SH'] },
            { name: 'Gaarden Hoe Witbier', style: 'Trappist/Belgian Ale, Wheat Beers', type: 'Extract', brewDate: '07/14/2015', originalGravity: 1.049, finalGravity: 1.010, description: 'The perfect pint after a hard day’s work, Gaarden Hoe is an ode to the historic and refreshing Belgian wit. Classic wheat is expertly tilled into a traditional pilsner malt bill and modest, grounded hop profile. Coriander and bitter orange peel offer slightly tart and citrusy undertones to quench even the most parched palate.', icon: '/content/images/garden hoe.jpg', capCodes: ['GH'] }
        ]

        instance.leftTap = {
            
        }

        instance.middleTap = {
            
        }

        instance.rightTap = {
            name: 'Honey Kolsch', style: 'German Ale', type: 'Extract', brewDate: '06/29/2015', originalGravity: 1.048, finalGravity: 1.008, description: 'A variation on our extremely popular Kölsch recipe with the addition of honey and a new yeast strain for a lighter body and flavor. Like our original Kölsch kit, this recipe features a pale color, light body, and smooth mouthfeel. Honey adds subtle floral character and lightens the body by fermenting to dryness. Really nice as a summer brew for barbecues and picnics, or to wean your friends off watery mass-produced lagers.', icon: '/content/images/kolsch.jpg'
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