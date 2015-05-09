window.addEventListener("load", function() {
  console.log("Hello World!");
});

// We name our App 'FxosDemo'
angular.module('FxosDemo', [])
  .controller('FxosController', [function () {
      console.log("Hello Angular!");
  }])
  ;