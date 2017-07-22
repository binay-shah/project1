(function() {
  "use strict";

  angular
    .module("modal.subList")
    .component("subItem2", {
      templateUrl: templateUrl,      
      bindings: { 'item': '<', 'onSelect': '&' }
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_subcategory2_link_html;
  }      
})();