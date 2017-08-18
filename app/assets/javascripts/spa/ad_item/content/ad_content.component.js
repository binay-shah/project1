(function() {
  "use strict";

  angular
    .module("spa.adItem")
    .component("adContentComponent", {
      templateUrl: templateUrl,
      controller: AdContentController,
      bindings: {'adItem': '<'}
      
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_content_html;
  } 
  
  AdContentController.$inject = ["$scope", "$element"];
  function AdContentController($scope, $element) {
    var $ctrl = this;
    
    $ctrl.$onInit = function() {
      console.log("AdContentController", $scope);   
      console.log($ctrl.adItem);     
             
    }    

    return;
    ////////////////////////////////  
  }
  
})();