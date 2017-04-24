'use strict';

// encapsulate the factory
(function(angular){
	// callback for the factory
	function UserFactory(){
		// reference the this variable
		var self = this;

		// initialize the form
		self.myForm = {};
		// initialize the user
		self.user = {
			name: 'srikar',
			email: 'srikar.sastry@gmail.com',
			phone: '12345678',
			income: '100,000'
		};

		self.array = [
		{
				name: 'srikar',
				email: 'srikar.sastry@gmail.com',
				phone: '12345678',
				income: '100000'
		},
		{
			name: 'hemanth',
			email: 'hemanth@gmail.com',
			phone: '56456456',
			income: '10000'
		},
		{
			name: 'chiti',
			email: 'chiti@gmail.com',
			phone: '56456456456',
			income: '1000000'
		},
		{
			name: 'chikadpally',
			email: 'chikadpally@gmail.com',
			phone: '0000000',
			income: '1'
		}];

		return self;

	}

	// define the factory
	angular.module('angularApp.services').factory('UserFactory',UserFactory);
})(window.angular || (window.angular = {}));