(function() {
  "use strict";

  angular
    .module("modal.mainList")
    .component("modalMainlist", {
      templateUrl: templateUrl,
      controller: AdModalMainlistController,
      bindings: { 'categories': '<'}
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_modalMainlist_html;
  }    


  AdModalMainlistController.$inject = ["$scope", 'spa.adForm.AdService', '$state'];
  function AdModalMainlistController($scope, AdService, $state) {
    var $ctrl=this;  
    $ctrl.onSelect = onSelect;     

    $ctrl.$onInit = function() {
      console.log("ModalMainlistController",$scope);

    }    
    //////////////////////////////////// 
    return;  

    function onSelect(mainCategory){
      //console.log("onSelect: "+id);
      AdService.setSelectedCategoryMain(mainCategory);      
      $state.go('subCategoryOne', { 'categId': mainCategory.id});
    }

}

  
})();