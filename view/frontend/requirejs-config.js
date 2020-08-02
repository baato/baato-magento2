var config = {
    paths: {
        mapbox: ['//api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl', 'Baato_Baato/js/lib/mapbox-gl'],
        Baato: ['//sgp1.digitaloceanspaces.com/baatocdn/baato-0.0.1', 'Baato_Baato/js/lib/baato']
    },
    map: {
        '*': {
            mapData: 'Baato_Baato/js/map-data',
        }
    },
    config : {
        mixins: {
            'Magento_Checkout/js/action/set-shipping-information': {
                'Baato_Baato/js/action/save-map-data-mixin': true
            }
        }
    }
}
