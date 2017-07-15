(function() {
  "use strict";

  angular
    .module("modal.mainList")
    .component("item", {
      templateUrl: templateUrl,
      //controller: ItemController,
      bindings: { 'category': '<', 'onSelect': '&'}
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_item_html;
  }
  
})();