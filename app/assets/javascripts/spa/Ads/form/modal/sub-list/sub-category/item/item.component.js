(function() {
  "use strict";

  angular
    .module("modal.subList")
    .component("subItem", {
      templateUrl: templateUrl,      
      bindings: { 'subcategory': '<', 'onSelect': '&'  }
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_subcategory1_link_html;
  }      
})();