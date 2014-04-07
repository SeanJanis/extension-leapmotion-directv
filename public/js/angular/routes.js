'use strict';

mainApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {templateUrl: 'partials/view_live.html', controller: ViewLivePartialCtrl}).
    when('/live', {templateUrl: 'partials/view_live.html', controller: ViewLivePartialCtrl}).
    otherwise({redirectTo: '/'});
}]);