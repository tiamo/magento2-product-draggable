<?php

namespace Teslaamazing\ProductDraggable\Override;

class CategoryTabProduct extends \Magento\Catalog\Block\Adminhtml\Category\Tab\Product
{
    public function _prepareColumns()
    {
        parent::_prepareColumns();
        $this->addColumn('dragging', [
            'type' => 'draggable-handle',
            'inline_css' => 'draggable-handle',
            'column_css_class' => 'data-grid-draggable-row-cell',
            'filter' => false
        ]);
        return $this;
    }
}