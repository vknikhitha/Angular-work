'use strict';

// encapsulate the factory
(function(angular){
	// callback for the factory
	function UserService($location,$rootScope,UserFactory,$window){
		// reference the this variable
		var self = this;

		self.performCalculation = function(user,_this){

			var monthlyIncome;
			// calculate monthly income
			monthlyIncome = ((parseInt(user.income.replace(',',''))/12)*0.67);
			
			// add monthly income to the user object
			_this.user.monthlyIncome = monthlyIncome.toString();

			UserFactory.user = angular.copy(_this.user);
			$rootScope.loading = true;

			$window.localStorage.setItem('User',JSON.stringify(_this.user));

			$location.path('/user');
		};
	}

	UserService.$inject = ['$location','$rootScope','UserFactory','$window'];

	// define the factory
	angular.module('angularApp.services').service('UserService',UserService);
})(window.angular || (window.angular = {}));
