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


  AdModalMainlistController.$inject = ["$scope"];
  function AdModalMainlistController($scope) {
    var $ctrl=this;       

    $ctrl.$onInit = function() {
      console.log("AdModalMainlistController",$scope);

    }    
    //////////////////////////////////// 
    return;  

}

  
})();