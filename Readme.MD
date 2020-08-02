# Baato Magento 2 Module


### Overview

This package has been built for integration of [Baato.io](https://baato.io) maps into Magento 2 Checkout page.
The concept behind this module is to store latitude and longitude of user (customer) into magento 2 backend during the checkout process.

### Contents
  - [Installation](#installation)
  - [Customization](#customization)
	  - [Style Customization](#style-customization)
		  - [Frontend](#frontend-style-customization)
		  - [Backend](#backend-style-customization)
	 - [JS Customizations](#javascript-customization)
		  - [Frontend](#frontend-js-customization)
		  - [Backend](#backend-js-customization)
	 -  [PHP Customizations](#javascript-customization)
	- [Templates](#template-files)
		- [Frontend](#frontend-template-customization)
		- [Backend](#backend-template-customization)

### Installation

 - Create directory `app/code/Baato/Baato` inside magento project root directory.
 - Download the .zip file and extract the contents into your `app/code/Baato/Baato`.
 - Run the following commands to install the module.

 ```bash
 cd <MAGENTO_ROOT_DIRECTORY> &&
 rm -rf generated/code &&
 php bin/magento s:up &&
 php bin/magento set:di:com
 ```

 - Login to magento 2 admin panel. Go to `Stores > Settings > Configurations`.
 - You should be able to see `Baato.io` in the side bar.
 - Under `Baato.io > General > Keys > Baato.io Key`,
   enter your [Baato.io](https://baato.io/) API Key for your site and save the configurations.



### Customization



#### Style Customization

⚠️ Please run `bin/magento setup:grade` after customizing any `.less`
files and clean the cache by using the command `bin/magento cache:clean`, else the customizations may not be visible
##### Frontend Style Customization
To customize the styling of maps container in checkout page, please consider placing the customizations in

`view/frontend/web/css/maps.less`

##### Backend Style Customization
To customize the styling of maps container in checkout page, please consider placing the customizations in

`view/adminhtml/web/css/maps.less`

#### JavaScript Customization

##### Frontend JS Customization
- The map is loaded in the checkout page by
**`view/frontend/web/js/maps.js`**

- The KnockoutJS template to the map containers is
**`view/frontend/web/template/maps.html`**


###### Backend JS Customization

- The map in the Order view page is rendered via `view/adminhtml/templates/order/shipping-address-map.phtml`

#### PHP Customization
- The previously mentioned JS Magento 2 UI Component and are loaded to the checkout page by
**`Plugins\Magento\Checkout\Block\Checkout\LayoutProcessor.php`**
- You can modify the positioning of the maps inside checkout page by modifying the
`sortOrder` key value of `$mapElementField` array.

````php
$mapElementField = [
 ...
 'sortOrder' => 100 // Change this value by the scale of 10 to move up/down ...]
````

- The `Plugins/Magento/Checkout/Block/Checkout/LayoutProcessor.php` file overrides the pre-existing layout processor file via
dependency injection. See `etc/di.xml`
- The latitudes and longitudes are saved into quote shipping address via `Plugins/Sales/Model/Order/SaveCustomAddressAttributes.php`.
- The quote shipping address is converted into order shipping address at  the time of checkout by subscribing to order created event at `Observer/UpdateOrderAddress.php`

#### Template Files

##### Frontend Template Customization

See `view/frontend/web/template/maps.html` for the template that renders map in checkout page.
The `view/frontend/templates/map.phtml` file only places the baato API key for usages through JavaScript.

##### Backend Template Customization

See `view/adminhtml/templates/order/shipping-address-map.phtml` for template that renders map in order view page.

