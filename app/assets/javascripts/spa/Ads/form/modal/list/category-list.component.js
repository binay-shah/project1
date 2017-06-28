(function() {
  "use strict";

  angular
    .module("spa.adForm")
    .component("sdModalList", {
      templateUrl: templateUrl,
      controller: AdModalListController,
      bindings: { 'categories': '<' }
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_modal_list_html;
  }    


  AdModalListController.$inject = ["$scope"];
  function AdModalListController($scope) {
    var $ctrl=this;
    

    //console.log($ctrl.categories);  

    $ctrl.$onInit = function() {
      console.log("AdModalListController",$scope);
    }    
    //////////////////////////////////// 
    
  
  
  
   

}

  
})();