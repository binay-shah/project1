(function() {
  "use strict";

  angular
    .module("spa.home")
    .service("spa.home.AdService", AdService);

    AdService.$inject = ['$http', "spa.config.APP_CONFIG"];
    function AdService($http, APP_CONFIG){
    	var service = this;

      service.getLatestAds = function(){
        return $http.get(APP_CONFIG.ApiPath + '/ads').then(function (response) {  
          service.ads = response.data           
          return service.ads;
        });
      }  

      service.getAllCategories = function(){
        return $http.get(APP_CONFIG.ApiPath + '/categories').then(function (response) {  
          service.allCategories = response.data           
          return service.allCategories;
        });
      } 

      service.getMainCategory = function(item){
        return item.name;
      } 	  
    }


 })();   
    
