<?php

namespace Baato\Baato\Blocks;

use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Framework\View\Element\Template;

class MapConfig extends Template
{
    public function __construct(Template\Context $context, ScopeConfigInterface $config, array $data = [])
    {
        parent::__construct($context, $data);
    }

    public function getKey()
    {
        return $this->_scopeConfig->getValue('baato/general/key');
    }

    public function getStyle()
    {
        return $this->_scopeConfig->getValue('baato/general/style');
    }
}
