'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])
    .factory('beerData', function () {
        var instance = {};
        
        instance.bottles = [
            { name: 'Brunch Stout', style: 'Stout', type: 'Extract', brewDate: 'December 2013', code: 'BS', originalGravity: 1.068, finalGravity: 1.020, description: 'Brunch: a portmanteau of "breakfast" and "lunch". Brunch Stout: a collision of brunch as a particularly indulgent meal time, and a particularly indulgent stout. 60 IBUs, loaded with sumptuous malt, acidic and tangy coffee, and wildly fruity Candi syrup, this is a stout that does not know when to stop. There\'s something here for every interpretation of this decadent mid-cycle ritual, from the sweet to the savory, the simple to the intricate. Explore the limits of American-style stout as you know it with your new deviously delicious companion.', icon: '/content/images/brunchstout.jpg', ibu: 60 },
            { name: 'Fruity Saison', style: 'Saison/Farmhouse Ale', type: 'Extract', brewDate: 'April 2014', code: 'SS, SC, SCN', originalGravity: 1.041, finalGravity: 1.010, description: 'This session-strength Saison of summer perfumes the air with tangy yeast and pungent hop aromas.', icon: '/content/images/saison.jpg', ibu: 47 },
            { name: 'Holiday Red', style: 'Amber Ale', type: 'Extract', brewDate: 'November 2013', code: 'HR', originalGravity: 1.062, finalGravity: 1.020, description: 'This strong-ish American amber ale is built for the cold: a substantial gravity for snowy weather, but a fast turnaround so you can get some holiday cheer from fermentor to pint ASAP. Malty but not too sweet, just enough bitterness to balance, a definite but not overstated citrus hop profile (bolstered by real citrus!), this is far from your normal holiday ale.', icon: '/content/images/holidayred.jpg', ibu: 29 },
            { name: 'Smashing Pumpkin', style: 'Spice/Fruit Beer', type: 'Partial Mash', brewDate: 'November 2013', code: 'HR', originalGravity: 1.060, finalGravity: 1.020, description: 'The perfect brew for fall, our Smashing Pumpkin Ale recipe is clean and sweetly malty, with just enough hop bitterness to balance. A dose of select spices at the end of the boil imbues the beer with a complex, lingering spice profile full of nutmeg, cinnamon, and ginger that persists from the pour to the last swish in the glass.', icon: '/content/images/smashingpumpkin.jpg', ibu: 15 }
        ]
            
        instance.leftTap = {
            name: 'Speckled Heifer', style: 'American Pale Ale', type: 'Partial Mash', brewDate: '05/10/14', originalGravity: 1.042, finalGravity: 1.008, description: 'A tranquil time-out in a pint glass, a pastoral idyll, a sociable session ale dairyland-style: hey, sometimes a beer is just a beer. Have one.', icon: '/content/images/speckledheifer.jpg', ibu: 22
        }

        instance.middleTap = {
            name: 'Patersbier', style: 'Belgian Trappist', type: 'Extract', brewDate: '05/09/14', originalGravity: 1.040, finalGravity: 1.010, description: 'Made only from pilsner malt, hops, and yeast, the complexity that results from these simple ingredients is staggering: perfumey floral hops, ripe pear fruit, sour apple, spicy cloves, candied citrus and a slight biscuit character on the drying finish ... a monk\'s session beer.', icon: '/content/images/patersbier.jpg', ibu: 47
        }

        instance.rightTap = {
            name: 'Fixed Gear', style: 'American Red Ale', type: 'All-Grain', brewDate: '06/13/14', originalGravity: 1.062, finalGravity: 1.010, description: 'Fixed Gear is a big, bold American red ale. It pours a glaring crimson tone with a rocky white head and a brilliant floral-citrus aroma, thanks to an aggressive dry hopping', icon: '/content/images/fixedgear.jpg', ibu: 47
        }

        return instance;
    })