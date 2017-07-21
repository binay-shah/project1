(function() {
  "use strict";

  angular
    .module("modal.subList")
    .component("modalSubMainlist", {
      templateUrl: templateUrl,
      controller: ModalSubMainlistController,
      bindings: { 'categories': '<' }
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_modal_sub_mainlist_html;
  }    


  ModalSubMainlistController.$inject = ["$scope", "spa.adForm.AdService", "$state"];
  function ModalSubMainlistController($scope, AdService, $state) {
    var $ctrl=this;
    $ctrl.onSelect = onSelect;

      

    $ctrl.$onInit = function() {
      console.log("ModalSubMainlistController",$scope);
    }    
    //////////////////////////////////// 
    return;

    function onSelect(mainCategory){
      console.log("onSelect: "+mainCategory.id);
      AdService.setSelectedCategoryMain(mainCategory);      
      $state.go('subCategoryOne', { 'categId': mainCategory.id});
    }

}

  
})();