'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])
    .factory('beerData', function () {
        var instance = {};
        
        instance.bottles = [
            { name: 'Brunch Stout', capCodes: ['BS'], style: 'Stout', type: 'Extract', brewDate: 'December 2013', code: 'BS', originalGravity: 1.068, finalGravity: 1.020, description: 'Brunch: a portmanteau of "breakfast" and "lunch". Brunch Stout: a collision of brunch as a particularly indulgent meal time, and a particularly indulgent stout. 60 IBUs, loaded with sumptuous malt, acidic and tangy coffee, and wildly fruity Candi syrup, this is a stout that does not know when to stop. There\'s something here for every interpretation of this decadent mid-cycle ritual, from the sweet to the savory, the simple to the intricate. Explore the limits of American-style stout as you know it with your new deviously delicious companion.', icon: '/content/images/brunchstout.jpg', ibu: 60 },
            { name: 'Fruity Saison', capCodes: ['SS: Strawberry', 'SC: Cherry', 'SCN: Cranberry'], style: 'Saison/Farmhouse Ale', type: 'Extract', brewDate: 'April 2014', code: 'SS, SC, SCN', originalGravity: 1.041, finalGravity: 1.010, description: 'This session-strength Saison of summer perfumes the air with tangy yeast and pungent hop aromas.', icon: '/content/images/saison.jpg', ibu: 47 },
            { name: 'Holiday Red', capCodes: ['HR'], style: 'Amber Ale', type: 'Extract', brewDate: 'November 2013', code: 'HR', originalGravity: 1.062, finalGravity: 1.020, description: 'This strong-ish American amber ale is built for the cold: a substantial gravity for snowy weather, but a fast turnaround so you can get some holiday cheer from fermentor to pint ASAP. Malty but not too sweet, just enough bitterness to balance, a definite but not overstated citrus hop profile (bolstered by real citrus!), this is far from your normal holiday ale.', icon: '/content/images/holidayred.jpg', ibu: 29 },
            { name: 'Smashing Pumpkin', capCodes: ['SP'], style: 'Spice/Fruit Beer', type: 'Partial Mash', brewDate: 'November 2013', code: 'HR', originalGravity: 1.060, finalGravity: 1.020, description: 'The perfect brew for fall, our Smashing Pumpkin Ale recipe is clean and sweetly malty, with just enough hop bitterness to balance. A dose of select spices at the end of the boil imbues the beer with a complex, lingering spice profile full of nutmeg, cinnamon, and ginger that persists from the pour to the last swish in the glass.', icon: '/content/images/smashingpumpkin.jpg', ibu: 15 }
        ]
            
        instance.leftTap = {
            name: 'Le Petite Orange', style: 'Belgian Dubbel', type: 'Extract', brewDate: 'July 2014', originalGravity: 1.052, finalGravity: 1.012, description: 'A Belgian Dubbel without the deep dark chocolate maltiness, the Orangé is rich with caramel sweetness and a full body. We added some coriander and orange peel for some extra punch.', icon: '/content/images/lepetiteorange.jpg', ibu: 19
        }

        instance.middleTap = {
            name: 'Gojira Peppered Pale Ale', style: 'American Pale Ale', type: 'Extract', brewDate: 'July 2014', originalGravity: 1.052, finalGravity: 1.012, description: 'Not the fire-breathing monster you would expect, this beer is a fun, friendly, fruity American Pale Ale with a light malt backbone that expresses the tremendous fruit flavors from Aji Amarillo peppers and a combo of Citra® and Amarillo® hops. The finish is refreshingly dry with just a hint of spice from the peppers that warms your palate and invites another sip.', icon: '/content/images/gojira.jpg', ibu: 12
        }

        instance.rightTap = {
            name: 'Fixed Gear', style: 'American Red Ale', type: 'All-Grain', brewDate: '06/13/14', originalGravity: 1.062, finalGravity: 1.010, description: 'Fixed Gear is a big, bold American red ale. It pours a glaring crimson tone with a rocky white head and a brilliant floral-citrus aroma, thanks to an aggressive dry hopping', icon: '/content/images/fixedgear.jpg', ibu: 47
        }

        return instance;
    })