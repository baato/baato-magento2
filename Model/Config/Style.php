<?php

namespace Baato\Baato\Model\Config;

use Magento\Framework\Data\OptionSourceInterface;

class Style implements OptionSourceInterface
{
    public function toOptionArray(): array
    {
        return [
            ['value' => 'retro', 'label' => __('Retro')],
            ['value' => 'dark', 'label' => __('Dark')],
            ['value' => 'breeze', 'label' => __('Breeze')],
            ['value' => 'monochrome', 'label' => __('Monochrome')],
            ['value' => 'boundaries', 'label' => __('Boundaries')],
        ];
    }
}
