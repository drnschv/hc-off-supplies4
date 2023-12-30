sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'hc450/officesupplies/osfiori/test/integration/FirstJourney',
		'hc450/officesupplies/osfiori/test/integration/pages/ProductsList',
		'hc450/officesupplies/osfiori/test/integration/pages/ProductsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('hc450/officesupplies/osfiori') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage
                }
            },
            opaJourney.run
        );
    }
);