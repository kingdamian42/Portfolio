function MainCtrl($scope,$location){
	$scope.getClass = function(path) {
		if ($location.path().substr(0, path.length) == path) {
			return "pure-menu-selected"
		} else {
			return ""
		}
	}
}
