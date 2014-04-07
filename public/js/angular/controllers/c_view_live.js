'use strict';

//
// AngularJS controller for setting up Javascript
// behind live data view.
//
function ViewLivePartialCtrl($scope, $timeout, $http) {
  // Members
  var _canvas;
  var _context;
  var _lm;
  var _lmHandler;
  var _remote;

  $scope.init = function() {
    _canvas = document.getElementById('canvas-sandbox');

    // Ensure proper aspect ratio
    _canvas.width = _canvas.clientWidth;
    _canvas.height = _canvas.clientHeight;


    _context = _canvas.getContext('2d');
    _lm = new Leap.Controller({ enableGestures: true });
    _remote = createRemote();

    _lmHandler = new LeapMotionHandler({
      controller: _lm,
      scope: $scope,
      canvas: _canvas,
      context: _context
    });
    _lmHandler.subscribeListeners();
  };

  function createRemote() {
    try {
      _remote = new DirecTV.Remote({ipAddress: '192.168.1.100'});
    } catch (err) {
      console.log(err);
    }
  }
}

ViewLivePartialCtrl.$inject = ['$scope', '$timeout', '$http'];
