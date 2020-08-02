define([
    'jquery',
    'underscore'
], function ($, _) {

    let latitudeField = $('input[name="custom_attributes[latitude]"]');
    let longitudeField = $('input[name="custom_attributes[longitude]"]');

    return {
        /**
         * Gets latitude from local storage.
         */
        getLatitude: function () {
            return latitudeField.val();
        },
        /**
         * Gets longitude from local storage.
         */
        getLongitude: function () {
            return longitudeField.val();
        },

        /**
         * Sets Latitude to the local storage.
         * @param latitude
         */
        setLatitude: function (latitude) {
            latitudeField.attr('value', latitude);
        },

        /**
         * Sets longitude to the local storage.
         * @param longitude
         */
        setLongitude: function (longitude) {
            longitudeField.attr('value', longitude);
        }
    }
});
