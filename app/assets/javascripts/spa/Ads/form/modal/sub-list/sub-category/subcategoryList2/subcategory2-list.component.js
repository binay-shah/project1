(function() {
  "use strict";

  angular
    .module("spa.adForm")
    .component("subcategoryList2", {
      templateUrl: templateUrl,
      controller: AdSubCategoriesList2Controller,
      bindings: { 'subcateg2': '<' }
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_subcategory2_list_html;
  }    

  AdSubCategoriesList2Controller.$inject = ["$scope", "$state"];
  function AdSubCategoriesList2Controller($scope,$state) {
    var $ctrl=this;
    

    console.log($ctrl.subcateg2);  
    if($ctrl.subcateg2.length == 0)
      $state.go("adPost"); 

    $ctrl.$onInit = function() {      
      console.log("AdSubCategoriesList2Controller",$scope);
    }    
    //////////////////////////////////// 
    return;  
  }

  
})();