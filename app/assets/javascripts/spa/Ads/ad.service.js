(function() {
  "use strict";

  angular
    .module("spa.adForm")
    .service("spa.adForm.AdService", AdService);

    AdService.$inject = ['$http', "spa.config.APP_CONFIG"]
    function AdService($http, APP_CONFIG){
    	var service = this;
    	
	  service.getCategories = function () {
	    return $http.get(APP_CONFIG.ApiPath + '/categories').then(function (response) {	    	
	      return response.data;
	    });
  	};
    }


 })();   
    
