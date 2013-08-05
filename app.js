angular.module('portfolio', []).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/home', {templateUrl: 'partials/about.html'}).
	when('/resume', {templateUrl: 'partials/resume.html'}).
	when('/projects', {templateUrl: 'partials/projects.html'}).
	otherwise({redirectTo: '/home'});
}]);