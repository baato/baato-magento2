<?php

namespace Baato\Baato\Plugins\Magento\Checkout\Block\Checkout;

use Magento\Checkout\Block\Checkout\LayoutProcessor as Layout;

class LayoutProcessor
{
    public function afterProcess(Layout $subject, $jsLayout)
    {
        $mapElementAttributeCode = 'map_selector';
        $mapElementField = [
            'component' => 'Baato_Baato/js/maps',
            'config' => [
                'customScope' => 'shippingAddress.custom_attributes',
                'customEntry' => null,
                'template' => 'Baato_Baato/maps',
                'elementTmpl' => 'Baato_Baato/maps',
                'tooltip' => [
                    'description' => 'this is what the field is for',
                ],
            ],
            'dataScope' => 'shippingAddress.custom_attributes' . '.' . $mapElementAttributeCode,
            'label' => 'Map',
            'provider' => 'checkoutProvider',
            'sortOrder' => 120,
            'validation' => [
                'required-entry' => true
            ],
            'options' => [],
            'filterBy' => null,
            'customEntry' => null,
            'visible' => true,
        ];


        $latitudeAttributeCode = 'latitude';
        $latitudeField = [
            'component' => 'Magento_Ui/js/form/element/abstract',
            'config' => [
                'customScope' => 'shippingAddress.custom_attributes',
                'customEntry' => null,
                'template' => 'ui/form/field',
                'elementTmpl' => 'ui/form/element/input',
            ],
            'dataScope' => 'shippingAddress.custom_attributes' . '.' . $latitudeAttributeCode,
            'label' => 'Latitude',
            'provider' => 'checkoutProvider',
            'sortOrder' => 120,
            'options' => [],
            'filterBy' => null,
            'customEntry' => null,
            'visible' => false,
        ];


        $longitudeAttributeCode = 'longitude';
        $longitudeField = [
            'component' => 'Magento_Ui/js/form/element/abstract',
            'config' => [
                'customScope' => 'shippingAddress.custom_attributes',
                'customEntry' => null,
                'template' => 'ui/form/field',
                'elementTmpl' => 'ui/form/element/input',
            ],
            'dataScope' => 'shippingAddress.custom_attributes' . '.' . $longitudeAttributeCode,
            'label' => 'Longitude',
            'provider' => 'checkoutProvider',
            'sortOrder' => 120,
            'options' => [],
            'filterBy' => null,
            'customEntry' => null,
            'visible' => false,
        ];

        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset']['children'][$mapElementAttributeCode] = $mapElementField;
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset']['children'][$latitudeAttributeCode] = $latitudeField;
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset']['children'][$longitudeAttributeCode] = $longitudeField;
        return $jsLayout;
    }
}
