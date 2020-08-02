<?php

namespace Baato\Baato\Plugins\Sales\Model\Order;

use Magento\Checkout\Api\Data\ShippingInformationInterface;
use Magento\Framework\Webapi\Rest\Request;
use Magento\Quote\Model\QuoteRepository;
use Magento\Sales\Api\OrderAddressRepositoryInterface;
use Psr\Log\LoggerInterface;

class SaveCustomAddressAttributes
{

    /**
     * @var Request
     */
    protected $request;
    /**
     * @var ShippingInformationInterface
     */
    protected $address;
    /**
     * @var OrderAddressRepositoryInterface
     */
    private $orderAddressRepository;
    /**
     * @var QuoteRepository
     */
    private $quoteRepository;
    /**
     * @var LoggerInterface
     */
    private $logger;

    public function __construct(
        Request $request,
        OrderAddressRepositoryInterface $orderAddressRepository,
        QuoteRepository $quoteRepository,
        LoggerInterface $logger
    ) {
        $this->request = $request;
        $this->orderAddressRepository = $orderAddressRepository;
        $this->quoteRepository = $quoteRepository;
        $this->logger = $logger;
    }

    public function afterSaveAddressInformation($subject, $result, $cardId, ShippingInformationInterface $shippingInformation)
    {
        $request = $this->request->getBodyParams();

        try {
            $quote = $this->quoteRepository->get($cardId);
            $shippingAddress = $quote->getShippingAddress();
            if (
                $shippingAddress &&
                isset($request['addressInformation']) &&
                isset($request['addressInformation']['shipping_address']) &&
                isset($request['addressInformation']['shipping_address']['customAttributes'])
            ) {
                $customAttributeCodes = ['latitude', 'longitude'];
                foreach ($request['addressInformation']['shipping_address']['customAttributes'] as $customAttribute) {
                    if (
                        $customAttribute['attribute_code'] &&
                        $customAttribute['value'] &&
                        in_array($customAttribute['attribute_code'], $customAttributeCodes)
                    ) {
                        $shippingAddress->setData($customAttribute['attribute_code'], $customAttribute['value']);
                    }
                }
                $shippingAddress->save();
            }
        } catch (\Exception $e) {
            $this->logger->critical($e->getMessage());
        }

        return $result;
    }
}
