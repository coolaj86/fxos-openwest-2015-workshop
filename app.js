window.addEventListener("load", function() {
  console.log("Hello World!");
});

// We name our App 'FxosDemo'
angular.module('FxosDemo', [])
  .controller('FxosController', ['$scope', function ($scope) {
      var FXC = this;
    
      FXC.sendSms = function (number, message) {
        console.log('enter', number, message);
        navigator.mozMobileMessage.send(number, message);
        console.log('complete');
      }
      
      FXC.motion = '{ "message": "Not Initialized" }';
      window.addEventListener('devicemotion', function (event) {
        window.motion = event;
        
        var rot = event.rotationRate;
        //console.log('motion event', event);
        
        FXC.motion = JSON.stringify({
          beta: rot.beta
        , alpha: rot.alpha
        , gamma: rot.gamma
        , rot: rot
        , grav: event.accelerationIncludingGravity
        , acc: event.acceleration
        });
        
        $scope.$apply();
      });
      console.log("Hello Angular!");
  }])
  ;