'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])
    .factory('beerData', function () {
        var instance = {};

        instance.bottles = [
        ]

        instance.leftTap = {
            

        }

        instance.middleTap = {
            name: 'Peace Coffee 2nd Crack Stout', style: 'Stout', type: 'Extract', brewDate: '10/08/2014', originalGravity: 1.064, finalGravity: 1.015, description: 'It was love at first whiff. With roasters and brewers united, we crafted a sturdy stout fortified with a blend of light and dark roast coffees from both hemispheres. Smoky and sweet, but packing a powerful punch and just the right balance of rich malt, berry and bittersweet cocoa. Sure, you could brew with any old cuppa joe. Just like you could drink any old beer. But you’re not here to settle, and neither are we. So give Peace a chance and taste for yourself what all the buzz is about!', icon: '/content/images/peacecoffeestout.jpg'
        }

        instance.rightTap = {
            name: 'Smashing Pumpkin Ale', style: 'Amber/Spice Ale', type: 'Extract', brewDate: '10/05/2014', originalGravity: 1.064, finalGravity: 1.014, description: 'The perfect brew for fall, our Smashing Pumpkin Ale recipe is clean and sweetly malty, with just enough hop bitterness to balance. A dose of select spices at the end of the boil imbues the beer with a complex, lingering spice profile full of nutmeg, cinnamon, and ginger that persists from the pour to the last swish in the glass.', icon: '/content/images/smashingpumpkin.jpg'
        }

        return instance;
    })
    .factory('boardGamesData', ['$http', function ($http) {
        return $http.get('http://bgg-json.azurewebsites.net/collection/jkschanke?grouped=true')
            .then(function (data) {
                return data.data;
            })
    }])