(function() {
  "use strict";

  angular
    .module("spa", [
      "ui.router",
      "spa.config",
      "spa.home",
      "spa.layout",
      "spa.authn",
      "spa.adForm",      
    ]);
})();
