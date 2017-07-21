(function() {
  "use strict";

  angular
    .module("modal.subList")
    .component("subCategoryTwo", {
      templateUrl: templateUrl,
      controller: SubCategoriesTwoListController,
      bindings: { 'subcategories2': '<' }
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_subcategory2_list_html;
  }    

  SubCategoriesTwoListController.$inject = ["$scope", "$state", "spa.adForm.AdService", "$rootScope"];
  function SubCategoriesTwoListController($scope,$state, AdService, $rootScope) {
    var $ctrl=this;
    
    $ctrl.onSelect = onSelect;
    
    if($ctrl.subcategories2.length == 0)
      $state.go("adPost"); 

    $ctrl.$onInit = function() {      
      console.log("SubCategoriesListTwoController",$scope);
    }    
    //////////////////////////////////// 
    return;  

    function onSelect(subCategoryTwo){
      //console.log("onSelect: "+id);
      AdService.setSelectedCategoryTwo(subCategoryTwo);
      $rootScope.$broadcast('modal:category', {select: true, selectedItem: subCategoryTwo});
      $state.go("adPost");
    }
  }

  
})();