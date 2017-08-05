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
  
  NavController.$inject = ["$scope", "$element"];
  function NavController($scope, $element) {
    var $ctrl=this;  
    $ctrl.collapseIt = collapseIt; 
    $ctrl.collapseId;   
    $ctrl.currIndex;
    
    $ctrl.$onInit = function() {
      console.log("NavController", $scope);     
      console.log($ctrl.mainCategory);        
    }    

    return;
    ////////////////////////////////  
    function collapseIt(id){
      console.log(id.currentTarget.getAttribute("data-id"));
      $ctrl.collapseId = ($ctrl.collapseId == "bottom"+id.currentTarget.getAttribute("data-id"))?-1: "bottom"+id.currentTarget.getAttribute("data-id");
      
    }

  }
  
})();