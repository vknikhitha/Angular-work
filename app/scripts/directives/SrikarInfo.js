'use strict';
// encapsulate the directive
(function(angular){
	// callback for directive
	function SrikarInfo(UserFactory,$window){
		return {
			restrict: 'E',
			//require: ['ngModel']
			link: function(scope){
				//var usrObj = UserFactory.user;
				scope.usrObj = angular.copy(JSON.parse($window.localStorage.getItem('User')));

				console.log(scope.usrObj);
			},
			templateUrl: 'views/directive.tpl.html'
		};
	}

	SrikarInfo.$inject = ['UserFactory','$window'];

	// define the directive
	angular.module('angularApp.directives').directive('srikarInfo',SrikarInfo);
})(window.angular || (window.angular = {}));