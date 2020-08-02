<?php


namespace Baato\Baato\Observer;


use Magento\Framework\Event\Observer;
use Magento\Framework\Event\ObserverInterface;
use Magento\Quote\Api\Data\CartInterface;
use Magento\Sales\Api\Data\OrderInterface;

class UpdateOrderAddress implements ObserverInterface
{

    public function execute(Observer $observer)
    {
        /** @var CartInterface $quote */
        $quote = $observer->getData('quote');

        /** @var OrderInterface $order */
        $order = $observer->getData('order');

        $quoteAddress = $quote->getShippingAddress();

        $orderAddress = $order->getShippingAddress();
        $orderAddress->setData('latitude', $quoteAddress->getData('latitude'));
        $orderAddress->setData('longitude', $quoteAddress->getData('longitude'));
        $orderAddress->save();
    }

}
