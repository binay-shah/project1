(function() {
  "use strict";

  angular
    .module("spa.adItem")
    .component("adContentComponent", {
      templateUrl: templateUrl,
      controller: AdContentController,
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
    return APP_CONFIG.ad_content_html;
  } 
  
  AdContentController.$inject = ["$scope", "$element", "numKeysFilter"];
  function AdContentController($scope, $element, numKeysFilter) {
    var $ctrl = this;
    $ctrl.range=range;
    
    $ctrl.$onInit = function() {
      console.log("AdContentController", $scope);   
      console.log($ctrl.adItem);     
      console.log(JSON.parse($ctrl.adItem.details));
       
    }    

    return;

     function range(num){
      num = num/2;
      return new Array(num);
    }
    ////////////////////////////////  
  }
  
})();