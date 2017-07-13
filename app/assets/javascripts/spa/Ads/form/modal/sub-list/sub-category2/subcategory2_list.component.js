(function() {
  "use strict";

  angular
    .module("modal.subList")
    .component("subCategoryTwo", {
      templateUrl: templateUrl,
      controller: AdSubCategoriesListTwoController,
      bindings: { 'subcategories2': '<' }
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_subcategory2_list_html;
  }    

  AdSubCategoriesListTwoController.$inject = ["$scope", "$state", "spa.adForm.AdService"];
  function AdSubCategoriesListTwoController($scope,$state, AdService) {
    var $ctrl=this;
    
    $ctrl.onSelect = onSelect;
    console.log($ctrl.subcategories2);  
    if($ctrl.subcategories2.length == 0)
      $state.go("adPost"); 

    $ctrl.$onInit = function() {      
      console.log("AdSubCategoriesListTwoController",$scope);
    }    
    //////////////////////////////////// 
    return;  

    function onSelect(subCategoryTwo){
      //console.log("onSelect: "+id);
      AdService.setSelectedCategoryTwo(subCategoryTwo);
    }
  }

  
})();