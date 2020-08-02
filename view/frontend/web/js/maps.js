define([
    'underscore',
    'ko',
    'uiComponent',
    'mapbox',
    'Baato',
    'jquery',
    'mage/translate'
], function (_, ko, Component, mapboxgl, Baato, $) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Baato_Baato/maps'
        },
        marker: undefined,
        map: undefined,
        places: ko.observableArray([]),
        key: window.baato_uuid,

        /**
         * Constructor.
         * @returns {*}
         */
        initObservable: function () {
            this._super();
            return this;
        },

        /**
         * Initializes the map element.
         */
        showMap: function () {
            let latLong = this.getCurrentCoordinates();
            let mapConfigs = {
                container: 'map-container',
                style: 'https://api.baato.io/api/v1/styles/breeze?key=' + this.key,
                center: latLong,
                zoom: 13
            }
            this.map = new mapboxgl.Map(mapConfigs);
            this.map.on('click', this.onMapClick.bind(this));


            /**
             * The following lines include .bind(this) with the
             * passed function arguments because they need the
             * context of this object for using the map data.
             */

            $(document).on(
                'keyup',
                '#baato-map-search-input',
                _.debounce(this.onSearch.bind(this), 1000) // Debounce is used so that API request is dont just once.
            );

            $(document).on(
                'click',
                '.place-selection-button',
                this.setPlace.bind(this)
            );
        },

        /**
         * Returns heading for map component.
         * @see view/frontend/web/js/template/maps.html
         * @returns {string}
         */
        getHeading: function () {
            return $.mage.__('Pick your shipping address.');
        },

        /**
         * Returns current latitude and longitude if geolocation is available.
         * @returns {{lng: number, lat: number}}
         */
        getCurrentCoordinates: function () {
            let latLong = {
                lng: 85.3240,
                lat: 27.7172
            };
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function (location) {
                        latLong = {
                            lng: location.coords.longitude,
                            lat: location.coords.latitude
                        }
                    }
                )
            }
            return latLong;
        },

        /**
         * Set Marker to the map on clicked location.
         * @param event
         */
        onMapClick: function (event) {
            if (this.marker) {
                this.marker.remove();
            }
            this.marker = new mapboxgl.Marker();
            this.marker.setLngLat(event.lngLat);
            this.marker.addTo(this.map);
            this.map.flyTo({
                center: event.lngLat
            });
            this.setLatLngToInputFields(event.lngLat);
        },

        /**
         * On Search Handler
         * @param event
         */
        onSearch: function (event) {
            let value = event.target.value;
            let self = this;
            if (value && value !== '') {
                let url = 'https://api.baato.io/api/v1/search?limit=5&key=' + this.key + '&q=' + value;
                $.ajax({
                    url: url,
                    method: 'GET',
                    success: function (response) {
                        self.places.removeAll();
                        response.data.forEach(function (place) {
                            self.places.push(place)
                        });
                    },
                    error: function (error) {

                    }
                })
            } else {
                this.places.removeAll();
            }
        },

        /**
         * Set Place on Map When clicked on place autocomplete suggestions.
         * @param event
         */
        setPlace: function (event) {
            let target = $(event.target);
            let placeId = target.data('placeid');
            let placeData = undefined;
            let self = this;
            new Baato.default.Places()
                .setBaseUrl('https://api.baato.io/api')
                .setPlaceId(placeId)
                .setKey(this.key)
                .doRequest()
                .then(function (response) {
                    placeData = response.data[0];
                    let latLong = placeData.centroid;

                    if (self.marker) {
                        self.marker.remove();
                    }
                    self.marker = new mapboxgl.Marker();
                    self.marker.setLngLat(latLong);
                    self.marker.addTo(self.map);
                    self.map.flyTo({
                        center: latLong,
                        essential: true
                    });
                    self.setLatLngToInputFields({lat: latLong.lat, lng: latLong.lon});
                }).catch(function (error) {
            });
            this.places.removeAll();
        },

        /**
         * Sets given object of Latitude, Longitude to input fields.
         * @param lngLat
         * {
         *      lng: number,
         *      lat: number
         * }
         */
        setLatLngToInputFields(lngLat) {

            if (!lngLat.lng || !lngLat.lat) {
                throw new Error('Please use an object with properties {lat: \'\', lng: \'\'} as latLng object.');
            }

            let latitude = $('input[name="custom_attributes[latitude]"]');
            let longitude = $('input[name="custom_attributes[longitude]"]');

            if (latitude.length > 0) {
                $(latitude[0]).attr('value', lngLat.lat);
            }

            if (longitude.length > 0) {
                $(longitude[0]).attr('value', lngLat.lng);
            }
        }
    });

});
