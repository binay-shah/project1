(function() {
  "use strict";

  angular
    .module("spa.adList")
    .service("spa.adList.AdListService", AdListService);

    AdListService.$inject = ['$http', "spa.config.APP_CONFIG"];
    function AdListService($http, APP_CONFIG){
    	var service = this;

      service.getLatestAds = function(){
        return $http.get(APP_CONFIG.ApiPath + '/ads').then(function (response) {  
          service.ads = response.data           
          return service.ads;
        });
      }  	  
    }


 })();   
    
