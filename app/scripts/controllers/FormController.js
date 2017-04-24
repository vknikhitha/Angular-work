'use strict';

// encapsulation for app
(function(angular){
	// defining the controller
	function FormController(UserFactory,UserService,$scope){
		// reference the this variable
		var vm = this;

		// initializing the form
		vm.myForm = UserFactory.myForm;

		// initialize the user
		vm.user = UserFactory.user;

		vm.submitUser = function(user){
			UserService.performCalculation(user,vm,$scope);
		};
	}

	FormController.$inject = ['UserFactory','UserService','$scope'];

	angular.module('angularApp.controllers').controller('FormController',FormController);
})(window.angular || (window.angular = {}));