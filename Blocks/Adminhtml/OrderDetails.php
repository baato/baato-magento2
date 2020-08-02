<?php

namespace Baato\Baato\Blocks\Adminhtml;

use Magento\Backend\Block\Template\Context;
use Magento\Customer\Api\AddressRepositoryInterface;
use Magento\Framework\Registry;
use Magento\Sales\Block\Adminhtml\Order\AbstractOrder;
use Magento\Sales\Helper\Admin;

class OrderDetails extends AbstractOrder
{
    public function __construct(
        Context $context,
        Registry $registry,
        Admin $adminHelper,
        AddressRepositoryInterface $addressRepository,
        array $data = []
    ) {
        parent::__construct($context, $registry, $adminHelper, $data);
    }

    /**
     * @return array|null[]
     */
    public function getShippingAddressLatLong()
    {
        try {
            $order = $this->getOrder();

            return [
                'latitude' => $order->getShippingAddress()->getData('latitude'),
                'longitude' => $order->getShippingAddress()->getData('longitude'),
            ];
        } catch (\Exception $e) {

        }
        return [
            'latitude' => null,
            'longitude' => null
        ];
    }

    public function getMapKey()
    {
        return $this->_scopeConfig->getValue('baato/general/key');
    }
}
