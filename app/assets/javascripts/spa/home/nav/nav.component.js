(function() {
  "use strict";

  angular
    .module("spa.home")
    .component("navComponent", {
      templateUrl: templateUrl,
      controller: NavController,
      bindings: {'mainCategory': '<'}
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.home_nav_html;
  } 
  
  NavController.$inject = ["$scope"];
  function NavController($scope) {
    var $ctrl=this;      
    
    $ctrl.$onInit = function() {
      console.log("NavController", $scope);     
      console.log($ctrl.mainCategory);        
    }    

    return;
    ////////////////////////////////  

  }
  
})();