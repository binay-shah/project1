(function() {
  "use strict";

  angular
    .module("spa.adList")
    .component("latestAds", {
      templateUrl: templateUrl,
      controller: LatestAdsController
      
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.latest_ads_html;
  }    


  LatestAdsController.$inject = ["$scope", "$state", "spa.authn.Authn", "$rootScope", '$element', 'spa.adList.AdListService'];
  function LatestAdsController($scope,  $state, Authn, $rootScope, $element, AdListService) {
    var $ctrl=this; 
     $ctrl.latestAds = {};
    
    $ctrl.$onInit = function() {
      console.log("LatestAdsController", $scope);
       AdListService.getLatestAds().then(function(response){
        $ctrl.latestAds = response;
        console.log($ctrl.latestAds);
      });
      
    }    

    return;
    ////////////////////////////////  

  }
  
})();