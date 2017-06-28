(function() {
  "use strict";

  angular
    .module("spa.adForm")
    .component("sdAdForm", {
      templateUrl: templateUrl,
      controller: AdFormController,
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_form_html;
  }    


  AdFormController.$inject = ["$scope", "$state", "spa.authn.Authn", "$rootScope", '$element'];
  function AdFormController($scope,  $state, Authn, $rootScope, $element) {
    var vm=this;
    

    vm.$onInit = function() {
      console.log("AdFormController",$scope);
    }
    return;
    //////////////

     
    

  }

  
})();