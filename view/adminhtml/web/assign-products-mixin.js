/*jshint browser:true jquery:true*/
/*global alert*/
define([
  'jquery',
  'mage/utils/wrapper',
  'mage/adminhtml/grid'
], function($, wrapper) {
  'use strict';
  return function(target) {
    return wrapper.wrap(target, function(original, config) {
      original(config);

      var gridJsObject = window[config.gridJsObjectName];
      var originalRowCallback = gridJsObject.initRowCallback;
      var selectedProducts = config.selectedProducts;
      var categoryProducts = $H(selectedProducts);

      gridJsObject.initRowCallback = function(grid, row) {
        originalRowCallback(grid, row);
        gridJsObject.bindSortable();
      };
      gridJsObject.sortableUpdateCallback = function(e, s) {
        $.each(gridJsObject.rows, function() {
          var row = $(this);
          var checkbox = row.find('[type=checkbox]');
          var position = row.find('.input-text').first();
          position.val(row.index() + 1);
          if (checkbox.is(':checked')) {
            categoryProducts.set(checkbox.val(), position.val());
          }
        });
        $('#in_category_products').val(Object.toJSON(categoryProducts));
      };
      gridJsObject.bindSortable();
    });
  };
});