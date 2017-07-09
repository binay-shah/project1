(function() {
  "use strict";

  angular
    .module("spa.adForm")
    .component("subcategoryList", {
      templateUrl: templateUrl,
      controller: AdSubCategoriesListController,
      bindings: { 'subcategories': '<' }
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_subcategory_list_html;
  }    

  AdSubCategoriesListController.$inject = ["$scope"];
  function AdSubCategoriesListController($scope) {
    var $ctrl=this;
    

    console.log($ctrl.subcategories);  

    $ctrl.$onInit = function() {      
      console.log("AdSubCategoriesListController",$scope);
    }    
    //////////////////////////////////// 
    return;  
  }

  
})();