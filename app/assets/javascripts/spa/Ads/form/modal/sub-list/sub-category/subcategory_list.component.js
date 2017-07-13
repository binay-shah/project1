(function() {
  "use strict";

  angular
    .module("modal.subList")
    .component("subCategoryOne", {
      templateUrl: templateUrl,
      controller: SubCategoryOneListController,
      bindings: { 'subcategories': '<' }
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_subcategory_list_html;
  }    

  SubCategoryOneListController.$inject = ["$scope"];
  function SubCategoryOneListController($scope) {
    var $ctrl=this;
    

    //console.log($ctrl.subcategories);  

    $ctrl.$onInit = function() {      
      console.log("SubCategoryOneListController",$scope);
    }    
    //////////////////////////////////// 
    return;  
  }

  
})();