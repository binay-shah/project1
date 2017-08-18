(function() {
  "use strict";

  angular
    .module("spa.adItem")
    .component("adNavComponent", {
      templateUrl: templateUrl,
      controller: AdNavController,
      bindings: {'adItem': '<'}
      
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_nav_html;
  } 
  
  AdNavController.$inject = ["$scope", "$element"];
  function AdNavController($scope, $element) {
    var $ctrl = this;
    
    $ctrl.$onInit = function() {
      console.log("AdNavController", $scope);     
             
    }    

    return;
    ////////////////////////////////  
    

  }
  
})();