<?php

namespace App\AppBundle\Document\Areabrick;

use Pimcore\Extension\Document\Areabrick\AbstractTemplateAreabrick;
use Pimcore\Extension\Document\Areabrick\AreabrickInterface;

class Copy extends AbstractTemplateAreabrick implements AreabrickInterface
{
    public function getName(): string
    {
        return 'Copy';
    }

    public function getDescription(): string
    {
        return 'Copy brick to be used throughout the site';
    }
}
