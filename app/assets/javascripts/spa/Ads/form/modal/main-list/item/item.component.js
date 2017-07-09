(function() {
  "use strict";

  angular
    .module("modal.mainList")
    .component("item", {
      templateUrl: templateUrl,
      controller: ItemController,
      bindings: { 'category': '<'}
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_item_html;
  }    


  ItemController.$inject = ["$scope"];
  function ItemController($scope) {
    var $ctrl=this;   

    console.log("category",$ctrl.category);    

    $ctrl.$onInit = function() {
      console.log("ItemController",$scope);

    }    
    //////////////////////////////////// 
    return;  

}

  
})();