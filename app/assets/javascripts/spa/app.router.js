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
    .state("home",{
      url: "/",
      templateUrl: APP_CONFIG.main_page_html,
      // controller: ,
      // controllerAs: ,
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
      views: {
        modal: {
          component: 'sdModal' 
               
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
    .state("list",{
      parent: 'adPost',
      
      views: {
        modal: {
          component: 'sdModalList'          
        }
        
      },
      resolve: {
            categories:["spa.adForm.AdService",   function(AdService){
              console.log(AdService.getCategories());
              return AdService.getCategories();
            }]
          }       
    })
    .state("list.subcategory",{         
          component: 'subcategoryList',  
          params: {categId: null},      
      resolve: {
            subcategories:["$transition$",  '$filter' ,'categories', function($transition$,  $filter, categories){
              console.log($transition$.params().categId);
                
               // return categories;              
              return $filter('filter')(categories, {'id': $transition$.params().categId})[0].sub_category;
            }]
          }       
    })
    
    $urlRouterProvider.otherwise("/"); 
    //eliminate default route
  }
})();
