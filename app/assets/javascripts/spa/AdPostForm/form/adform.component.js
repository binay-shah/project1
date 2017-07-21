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


  AdFormController.$inject = ["$scope", "$state", "spa.authn.Authn", "$rootScope", '$element', 'spa.adForm.AdService'];
  function AdFormController($scope,  $state, Authn, $rootScope, $element, AdService) {
    var vm=this;
    vm.select = false;
    vm.selectedCategory = null;
    

    
    vm.$onInit = function() {
      console.log("AdFormController",$scope);
    }

    var cancelListener = $rootScope.$on('modal:category', function (event, data) {
      //console.log("Event: ", event);
      //console.log("Data: ", data);    
      vm.selectedCategory = AdService.getSelectedCategory();      
      vm.select = true;
  });

  vm.$onDestroy = function () {
    cancelListener();
  };

    return;
    ////////////////////////////

     
    

  }

  
})();