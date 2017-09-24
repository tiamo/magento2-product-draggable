/*jshint browser:true jquery:true*/
/*global alert*/
define([
  'jquery',
  'mage/utils/wrapper'
], function($, wrapper) {
  'use strict';
  return function(target) {
    return wrapper.wrap(target, function(original, config) {
      original(config);
      var gridJsObject = window[config.gridJsObjectName];
      gridJsObject.sortableUpdateCallback = function(e, s) {
        $.each(gridJsObject.rows, function() {
          $(this).find('.col-position input').val($(this).index() + 1);
        });
      };
      var initRowCallback = gridJsObject.initRowCallback;
      gridJsObject.initRowCallback = function(grid, row) {
        initRowCallback(grid, row);
        gridJsObject.bindSortable();
      };
      gridJsObject.bindSortable();
    });
  };
});