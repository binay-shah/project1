(function() {
  "use strict";

  angular
    .module("spa.adForm")
    .component("sdModal", {
      templateUrl: templateUrl,
      controller: AdModalController,
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_modal_html;
  }    


  AdModalController.$inject = ["$scope"];
  function AdModalController($scope, AdService) {
    var $ctrl=this;   
    

    $ctrl.$onInit = function() {
      console.log("AdModalController",$scope);

    }    
    //////////////////////////////////// 
    return;
  
  
  
   

}

  
})();