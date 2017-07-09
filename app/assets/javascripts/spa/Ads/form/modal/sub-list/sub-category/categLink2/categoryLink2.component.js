(function() {
  "use strict";

  angular
    .module("spa.adForm")
    .component("categLink2", {
      templateUrl: templateUrl,      
      bindings: { 'subcategory': '<' }
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_category2_link_html;
  }      
})();