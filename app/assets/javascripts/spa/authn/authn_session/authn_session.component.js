(function() {
  "use strict";

  angular
    .module("spa.authn")
    .component("sdAuthnSession", {
      templateUrl: templateUrl,
      controller: AuthnSessionController
    });


  templateUrl.$inject = ["spa.config.APP_CONFIG"];
  function templateUrl(APP_CONFIG) {
    return APP_CONFIG.authn_session_html;
  }    

  AuthnSessionController.$inject = ["$scope","$state", "spa.authn.Authn"];
  function AuthnSessionController($scope, $state, Authn) {
    var vm=this;
    vm.loginForm = {}
    vm.login = login;
    vm.logout = logout;
    vm.getCurrentUser = Authn.getCurrentUser;
    vm.getCurrentUserName = Authn.getCurrentUserName;    

    vm.$onInit = function() {
      console.log("AuthnSessionController",$scope);
    }
    
    return;
    //////////////
    function login() {
      console.log("login");
      Authn.login(vm.loginForm).then(
        function(){
          $state.go("home");
        });
    }
    function logout() {
      Authn.logout().then(
        function(){
          vm.dropdown.removeClass("open");
        });
    }    

  }
})();