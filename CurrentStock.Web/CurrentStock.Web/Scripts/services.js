'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])
    .factory('beerData', function () {
        var instance = {};

        instance.bottles = [
            { name: 'Orange Chocolate Stout', style: 'Stout', type: 'All-Grain', brewDate: '05/06/2015', originalGravity: 1.045, finalGravity: 1.010, description: 'Stout brewed with orange peel and cocoa powder for a chocolatey finish. This kind of sucks, try at your own risk', icon: '/content/images/peatsmokedporter.jpg', capCodes: ['OC'] }
        ]

        instance.leftTap = {
            name: 'Permafrost India White Ale', style: 'IPA', type: 'Extract', brewDate: '05/24/2015', originalGravity: 1.064, finalGravity: 1.014, description: 'This complex and hoppy brew will help you to navigate the doldrums of seemingly never ending winters. Developed with the pioneering spirit of American brewers, this White IPA melds old world tradition with the hoppy boldness of an American IPA.', icon: '/content/images/permafrost.jpg'
        }

        instance.middleTap = {
            name: 'Mosaic IPA', style: 'IPA', type: 'Extract', brewDate: '05/18/2015', originalGravity: 1.072, finalGravity: 1.015, description: 'Mosaic is the icon of single-hop complexity. Its kaleidoscope of tantalizing citrus, pine, tropical fruit, and berry notes decorate each golden-copper hued glass, alluding to an IPA recipe kit with many more varieties of hops. Capped in thick, ivory froth, a meticulous arrangement of malts lends subtle caramel sweetness to a modest, bready backbone. Mosaic bursts up from the depths in a prismatic eruption; each wave of evergreen grapefruit overwhelmed by sweeping pineapple-mango herbals . This spectral motif quiets into abstract bitterness for a smooth, refreshing, hop-forward finish.', icon: '/content/images/mosaic.jpg'
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