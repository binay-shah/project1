(function() {
  "use strict";

  angular
    .module("spa.adItem")
    .component("adItemComponent", {
      templateUrl: templateUrl,
      controller: AdItemController,
      bindings: {'adItem': '<'}
      
    })
    .filter('numKeys', function() {
      return function(json) {
          var keys = Object.keys(json)
          return keys.length;
      }
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_item_html;
  } 
  
  AdItemController.$inject = ["$scope", "$element", "numKeysFilter"];
  function AdItemController($scope, $element, numKeysFilter) {
    var $ctrl = this;
    $ctrl.range=range;
    $ctrl.mapModalShown =false;
    $ctrl.openMapModal = openMapModal;
    
    $ctrl.$onInit = function() {
      console.log("AdItemController", $scope);       
    }    

    return;
    //////////////////////////////// 

     function range(num){
      num = num/2;
      return new Array(num);
    }

    function openMapModal(){
     $ctrl.mapModalShown = !$ctrl.mapModalShown;     
    }

    
  }
  
})();