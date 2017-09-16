(function() {
  "use strict";

  angular
    .module("spa.adItem")
    .component("mapModalComponent", {
      templateUrl: templateUrl,
      controller: MapModalController,  
      transclude: true,
      bindings: {
        'show': '='
      }   
      
    });
    


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.map_modal_html;
  } 
  
  MapModalController.$inject = ["$scope", "$element", "spa.geoloc.Map"];
  function MapModalController($scope, $element, Map) {
    var $ctrl = this;
    $ctrl.hideModal = hideModal;
    $ctrl.position= {lng: "85.3306206",lat: "27.6804722"};

    
    
    $ctrl.$onInit = function() {
      console.log("MapModalController", $scope);  
      console.log($ctrl.show);       
    }    

    $ctrl.$postLink = function(){      
      var element = $element.find('#map')[0];  
      initializeMap(element, $ctrl.position);    
    }

    return;
    //////////////////////////////////////// 

    function hideModal() {
        $ctrl.show = false;
    };

    function initializeMap(element, position){
      console.log(position.lng, position.lat);
      $ctrl.map = new Map(element, {
        center: position,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    }
    
  }
  
})();