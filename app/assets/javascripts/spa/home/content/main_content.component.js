(function() {
  "use strict";

  angular
    .module("spa.home")
    .component("mainComponent", {
      templateUrl: templateUrl,
      controller: ContentController,
      bindings: {'latestAds': '<'}
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.home_content_html;
  }    


  ContentController.$inject = ["$scope"];
  function ContentController($scope) {
    var $ctrl=this;      
    
    $ctrl.$onInit = function() {
      console.log("ContentController", $scope);     
      console.log($ctrl.latestAds);        
    }    
    return;
    ////////////////////////////////////  

  }
  
})();