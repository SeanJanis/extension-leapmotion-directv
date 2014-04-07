'use strict';

//
// Main empty ctrl for entire single-page app
//
function MainCtrl($scope, $window, webStorage) {
  $scope._webStorage = webStorage;
}

MainCtrl.$inject = ['$scope', 'webStorage'];