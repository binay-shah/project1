(function() {
  "use strict";

  angular
    .module("spa.adForm")
    .component("categLink", {
      templateUrl: templateUrl,      
      bindings: { 'category': '<' }
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_category_link_html;
  }      
})();