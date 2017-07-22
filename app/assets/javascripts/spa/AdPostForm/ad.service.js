(function() {
  "use strict";

  angular
    .module("spa.adForm")
    .service("spa.adForm.AdService", AdService);

    AdService.$inject = ['$http', "spa.config.APP_CONFIG"]
    function AdService($http, APP_CONFIG){
    	var service = this;
      service.categories = null;
      service.selectedCategory = {};
      service.selectedCategory.one={};
      service.selectedCategory.two={};
      service.formData = null;

      
    	
  	  service.getCategoriesFromServer = function () {
  	    return $http.get(APP_CONFIG.ApiPath + '/categories').then(function (response) {	 
          service.categories = response.data 
          service.selectedCategory = {};  	
  	      return service.categories;
  	    });
    	};

      service.getFormFields = function(){
         return $http.get(APP_CONFIG.ad_post_formData).then(function (response) {  
          //console.log(response.data); 
          service.formData  =response.data;
          return service.formData;
        });
      }

      service.getCategories = function(){
        //console.log(service.categories); 
        return service.categories;
      };

      service.getSelectedCategory = function(){
        return service.selectedCategory;
      }
      

      service.setSelectedCategoryMain = function(item){
        service.selectedCategory.one = null;
        service.selectedCategory.two = null;  
        service.selectedCategory.main=item;         

      }

      service.setSelectedCategoryOne = function(item){
        service.selectedCategory.one = item;
        service.selectedCategory.two = null;        
      }

      service.setSelectedCategoryTwo = function(item){
        service.selectedCategory.two = item;  
        //console.log(service.selectedCategory.two);      
        //console.log("service:"+ service.selectedCategory.two.id+" "+ service.selectedCategory.two.name);
      }
    }


 })();   
    
