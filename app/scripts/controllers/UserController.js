'use strict';

(function(angular){
	function UserController(UserFactory){
		console.log(UserFactory.user);
	}

	UserController.$inject = ['UserFactory'];
	angular.module('angularApp.controllers').controller('UserController',UserController);
})(window.angular || (window.angular = {}));