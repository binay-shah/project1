(function() {
  "use strict";

  angular
    .module("spa")
    .config(RouterFunction);

  RouterFunction.$inject = ["$stateProvider",
                            "$urlRouterProvider", 
                            "spa.config.APP_CONFIG"];

  function RouterFunction($stateProvider, $urlRouterProvider, APP_CONFIG) {
    $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: APP_CONFIG.main_page_html
    })
    .state("public.home",{
      url: "/",
      views: {        
        nav: 'navComponent',
        content: 'mainComponent'   

      },
      resolve: {
        latestAds: ["spa.home.AdService", function(AdService){
          return AdService.getLatestAds();
        }], 
        mainCategory: ["spa.home.AdService", function(AdService){
          return  AdService.getAllCategories();
        }]

      }
      
    })
    .state("accountSignup",{
      url: "/signup",      
      component: 'sdSignup'
    })
    .state("authn",{ 
      url: "/authn",      
      component: 'sdAuthnSession'
    })
    .state("adPost",{ 
      url: "/adPost",      
      component: 'sdAdForm'
    })
    .state("modal", {
      parent: 'adPost',
      abstract: true,       
      views: {
        modal: {
          //component: 'sdModal'  
          templateUrl: APP_CONFIG.ad_modal_html              
        }
      },
      onEnter: ["$state",  function($state) {

        $(document).on("keyup", function(e) {
          if(e.keyCode == 27) {
            $(document).off("keyup");
            $state.go("adPost");
          }
        });

        $(document).on('click' ,'.close,  #myModal', function(event) {         
           console.log(event);    
          $state.go("adPost");          
        });

        $(document).on("click", ".modal-content", function(e) {
          e.stopPropagation();
        });
      }]    
      
    })
    .state("modal.mainList", {        
      
      component: 'modalMainlist',    
      
      resolve: {
            categories:["spa.adForm.AdService",   function(AdService){              
              return AdService.getCategoriesFromServer();
            }]
          }       
    })
   .state("modal.sublist", {   
      //parent: "modal.mainList",
      abstract: true,      
      templateUrl: APP_CONFIG.ad_modalSublist_html    
            
    })
    .state("mainCategory",{  
      parent: "modal.sublist",
      component: 'modalSubMainlist',      
      resolve: {
            categories:["spa.adForm.AdService", '$transition$',    function(AdService,$transition$){                          
              return AdService.getCategories();
            }]
          }       
    })
    .state("subCategoryOne",{   
          parent:  'mainCategory',     
          component: 'subCategoryOne',  
          params: {categId: null},      
          resolve: {
            subcategories:["$transition$",  '$filter' ,'categories', function($transition$,  $filter, categories){                                       
              return $filter('filter')(categories, {'id': $transition$.params().categId})[0].sub_category;
            }]
          }       
    })
    .state("subCategoryTwo",{   
          parent:  'subCategoryOne',     
          component: 'subCategoryTwo',  
          params: {id: null},      
          resolve: {
            subcategories2:["$transition$",  '$filter' ,'subcategories', function($transition$,  $filter, subcategories){                     
              return $filter('filter')(subcategories, {'id': $transition$.params().id})[0].sub_category;
            }]
          }       
    })
    
    $urlRouterProvider.otherwise("/"); 
    //eliminate default route
  }
})();
