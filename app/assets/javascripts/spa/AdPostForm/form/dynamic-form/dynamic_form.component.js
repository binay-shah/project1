(function() {
  "use strict";

  angular
    .module("spa.adForm")
    .component("dynamicForm", {
      templateUrl: templateUrl,
      controller: DynamicFormController
      
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.ad_post_dynamic_form_html;
  }    


  DynamicFormController.$inject = ["$scope", 'spa.adForm.AdService', '$rootScope', '$filter'];
  function DynamicFormController($scope, AdService, $rootScope, $filter) {
    var $ctrl=this; 
    $ctrl.formFields= {};   
    $ctrl.dynamicFormJson=null;

    $ctrl.$onInit = function() {
      console.log("DynamicFormController", $scope);      
      AdService.getFormFields().then(function(response){
        $ctrl.dynamicFormJson = response;
        $ctrl.formFields.fields = $filter('filter')($ctrl.dynamicFormJson, {'name': 'initial'})[0].fields;
    });

      var cancelListener = $rootScope.$on('modal:category', function (event, data) {
        //console.log("Event: ", event);
        //console.log("Data: ", data);    
        $ctrl.selectedCategory = AdService.getSelectedCategory();      
        console.log(data.selectedItem.name);
        $ctrl.formFields.fields = $filter('filter')($ctrl.dynamicFormJson, {'name': data.selectedItem.name.toLowerCase()})[0].fields;
        console.log($ctrl.formFields.fields);
      });

      $ctrl.$onDestroy = function () {
        cancelListener();
      };
      

    }    
    //////////////////////////////////// 
    return;     

}

  
})();