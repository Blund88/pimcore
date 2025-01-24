<?php

namespace App\AppBundle\Document\Areabrick;

use Pimcore\Extension\Document\Areabrick\AbstractTemplateAreabrick;
use Pimcore\Extension\Document\Areabrick\AreabrickInterface;

class Hero extends AbstractTemplateAreabrick implements AreabrickInterface
{
    public function getName(): string
    {
        return 'Hero';
    }

    public function getDescription(): string
    {
        return 'Hero brick for the header of pages';
    }
}
