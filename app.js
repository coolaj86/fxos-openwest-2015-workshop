window.addEventListener("load", function() {
  console.log("Hello World!");
});

// We name our App 'FxosDemo'
angular.module('FxosDemo', [])
  .controller('FxosController', ['$scope', function ($scope) {
      var FXC = this;
      var lastOrientationUpdate = 0;
      var lastMotionUpdate = 0;

      FXC.sendSms = function (number, message) {
        console.log('enter', number, message);
        navigator.mozMobileMessage.send(number, message);
        console.log('complete');
      }

      FXC.motion = '{ "message": "Not Initialized" }';
      window.addEventListener('devicemotion', function (event) {
        if (Date.now() - lastMotionUpdate < 1000) {
          return;
        }

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

      FXC.orientation = '{ "message": "Not Initialized" }';
      window.addEventListener('deviceorientation', function (event) {
        if (Date.now() - lastOrientationUpdate < 1000) {
          return;
        }

        lastOrientationUpdate = Date.now();

        window.orientation = event;

        FXC.orientation = JSON.stringify({
          beta: event.beta
        , alpha: event.alpha
        , gamma: event.gamma
        });

        $scope.$apply();
      });
      console.log("Hello Angular!");
  }])
  ;
