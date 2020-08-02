# Baato Magento 2 Module


### Overview

This package has been built for integration of [Baato.io](https://baato.io) maps into Magento 2 Checkout page.
The concept behind this module is to store latitude and longitude of user (customer) into magento 2 backend during the checkout process.

### Installation

 - Download the .zip file and extract the contents into your `app/code` directory inside the Magento root directory.
 - Run the following commands to install the module.

 ```bash
    cd <MAGENTO_ROOT_DIRECTORY> &&
    rm -rf generated/code &&
    bin/magento s:up &&
    bin/magento set:di:com
```
 - Login to magento 2 admin panel. Go to `Stores > Settings > Configurations`.
 - You should be able to see `Baato.io` in the side bar.
 - Under `Baato.io > General > Keys > Baato.io Key`,
   enter your [Baato.io](https://baato.io/) API Key for your site and save the configurations.



### Customization



##### Style Customizations

⚠️ Please run `bin/magento setup:grade` after customizing any `.less` files and clean the cache by using the command `bin/magento cache:clean`, else the customizations maynot be visible
##### Frontend
To customize the styling of maps container in checkout page, please consider placing the customizations in

`view/frontend/web/css/maps.less`

##### Backend


##### Javascript Customizations

- The map is loaded in the checkout page by
**`view/frontend/web/js/maps.js`**

- The KnockoutJS template to the map containers is
**`view/frontend/web/template/maps.html`**


##### PHP Customizations
- The previously mentioned JS Magento 2 UI Component and are loaded to the checkout page by
**`Plugins\Magento\Checkout\Block\Checkout\LayoutProcessor.php`**
- You can modify the positioning of the maps inside checkout page by modifying the
`sortOrder` key value of `$mapElementField` array.

````php
    $mapElementField = [
        ...

        'sortOrder' => 100 // Change this value by the scale of 10 to move up/down
        ...
    ]
````


```
Note: The above mentioned paths are relative to the module root directory ie. Baato/Baato
```
