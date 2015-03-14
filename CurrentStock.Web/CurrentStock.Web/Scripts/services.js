'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])
    .factory('beerData', function () {
        var instance = {};

        instance.bottles = [
            { name: 'Lederhosen Hoptoberfest', style: 'Hybrid', type: 'Extract', brewDate: '11/11/2014', originalGravity: 1.060, finalGravity: 1.012, description: 'Created in the spirit of the annual festival in Munich, this hybrid beer is designed to be reminiscent of a traditional Marzen lager but fermented as an ale. The Kolsch yeast will retain a bit of lager character, especially if the fermentation temperature is kept on the low side - 60 to 65F is perfect. The use of Sterling hops provides a smooth bitterness, and just a hint of spicy hop flavor to mingle with this malt forward beer. This is a rapidly maturing beer, so you can enjoy this one a few weeks after brewing, and then ride out the autumn season sipping in style.', icon: '/content/images/lederhosenhoptoberfest.jpg', capCodes: ['H'] }
        ]

        instance.leftTap = {
            
        }

        instance.middleTap = {
            name: 'Peat Smoked Porter', style: 'Stout/Porter', type: 'Extract', brewDate: '01/04/2015', originalGravity: 1.062, finalGravity: 1.010, description: 'A midnight-black strong porter with an assertive profile: roasty, bitter, and big with underlying herbal, briny smoke character.', icon: '/content/images/peatsmokedporter.jpg'
        }

        instance.rightTap = {
            name: 'Ginger Snap Saison', style: 'Trappist/Belgian Ale', type: 'Extract', brewDate: '01/05/2015', originalGravity: 1.058, finalGravity: 1.004, description: 'Distinct undertones of Saison funk, exotic notes of verbena and candied ginger evolve into a firestorm of complex, earthy spice. Bursts of citrus peel collide with wild lemongrass and peppery florals in a tumultuous surge of flavor. \nAlight with lemony herbals of Sorachi Ace, the sweet caramelly malt profile offers a pleasant mouthfeel that develops lingering, gingery warmth. Highly carbonated and generously hopped, Ginger Snap finishes dry-yet-smooth with a quenching bite for superb, refreshing drinkability.', icon: '/content/images/gingersnap.jpg'
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