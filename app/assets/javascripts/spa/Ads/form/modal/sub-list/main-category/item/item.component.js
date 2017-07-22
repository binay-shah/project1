(function() {
  "use strict";

  angular
    .module("modal.subList")
    .component("categoryItem", {
      templateUrl: templateUrl,      
      bindings: { 'category': '<', 'onSelect': '&'}
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_modal_sub_mainlist_item_html;
  }      
})();