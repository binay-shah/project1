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


  ModalSubMainlistController.$inject = ["$scope"];
  function ModalSubMainlistController($scope) {
    var $ctrl=this;
    

    //console.log($ctrl.categories);  

    $ctrl.$onInit = function() {
      console.log("ModalSubMainlistController",$scope);
    }    
    //////////////////////////////////// 

}

  
})();