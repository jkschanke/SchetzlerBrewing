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
            name: 'Gojira Peppered Pale Ale', style: 'American Pale Ale', type: 'Extract', brewDate: '07/07/2014', originalGravity: 1.052, finalGravity: 1.012, description: 'Not the fire-breathing monster you would expect, this beer is a fun, friendly, fruity American Pale Ale with a light malt backbone that expresses the tremendous fruit flavors from Aji Amarillo peppers and a combo of Citra® and Amarillo® hops. The finish is refreshingly dry with just a hint of spice from the peppers that warms your palate and invites another sip.', icon: '/content/images/gojira.jpg', ibu: 12
            
        }

        instance.middleTap = {
            name: 'Le Petite Orange', style: 'Belgian Dubbel', type: 'Extract', brewDate: 'July 2014', originalGravity: 1.052, finalGravity: 1.012, description: 'A Belgian Dubbel without the deep dark chocolate maltiness, the Orangé is rich with caramel sweetness and a full body. We added some coriander and orange peel for some extra punch.', icon: '/content/images/lepetiteorange.jpg', ibu: 19
        }

        instance.rightTap = {
            name: 'Mint Chocolate Milk Stout', style: 'Stout', type: 'Extract', brewDate: '08/05/2014', originalGravity: 1.048, finalGravity: 1.022, description: 'A milk stout (brewed with lactose sugar for body and residual sweetness) laced with pure cacao nibs and fresh peppermint in secondary.', icon: '/content/images/milkstout.jpg', ibu: 31
        }

        return instance;
    })