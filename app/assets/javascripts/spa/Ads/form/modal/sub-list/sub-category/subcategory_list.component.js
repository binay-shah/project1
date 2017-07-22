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

  SubCategoryOneListController.$inject = ["$scope", "$state", "spa.adForm.AdService", "$rootScope"];
  function SubCategoryOneListController($scope, $state, AdService, $rootScope) {
    var $ctrl=this;
    
    $ctrl.onSelect = onSelect;
    //console.log($ctrl.subcategories);  

    $ctrl.$onInit = function() {      
      console.log("SubCategoryOneListController",$scope);
    }    
    //////////////////////////////////// 
    return; 

    function onSelect(subCategoryOne){
      console.log("onSelect: "+subCategoryOne.id);
      AdService.setSelectedCategoryOne(subCategoryOne); 
      if(subCategoryOne.sub_category.length > 0)     
        $state.go('subCategoryTwo', { 'id': subCategoryOne.id});
      else{
        $rootScope.$broadcast('modal:category', {select: true});
        $state.go("adPost");
      }
    }
     
  }

  
})();