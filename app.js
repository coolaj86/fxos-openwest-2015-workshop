window.addEventListener("load", function() {
  console.log("Hello World!");
});

// We name our App 'FxosDemo'
angular.module('FxosDemo', [])
  .controller('FxosController', [function () {
      var FXC = this;
    
      FXC.sendSms = function (number, message) {
        console.log('enter', number, message);
        navigator.mozMobileMessage.send(number, message);
        console.log('complete');
      }
      
      console.log("Hello Angular!");
  }])
  ;