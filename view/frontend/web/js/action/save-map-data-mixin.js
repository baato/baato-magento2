define([
    'jquery',
    'mage/utils/wrapper',
    'Magento_Checkout/js/model/quote',
], function ($, wrapper, quote) {
    'use strict';

    return function (setShippingInformationAction) {
        return wrapper.wrap(setShippingInformationAction, function (originalAction) {
            let shippingAddress = quote.shippingAddress();
            if (shippingAddress['customAttributes'] === undefined) {
                shippingAddress['customAttributes'] = [];
            }

            let latitude = $('input[name="custom_attributes[latitude]"]');
            let longitude = $('input[name="custom_attributes[longitude]"]');

            console.log(latitude, longitude);
            if(latitude.length > 0 && longitude.length > 0) {
                shippingAddress['customAttributes'] = [
                    {
                        attribute_code: 'latitude',
                        value: latitude[0].getAttribute('value')
                    },
                    {
                        attribute_code: 'longitude',
                        value: longitude[0].getAttribute('value')
                    }
                ]
            }

            let a = originalAction();
            console.log(shippingAddress);
            return a;
        });
    };
});
