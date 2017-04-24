// encapsulate the angular app
(function(angular){
  'use strict';
  // app configuration
  function AppConfig($routeProvider){
    $routeProvider
    .when('/form',{
      templateUrl: 'views/form.tpl.html',
      controller: 'FormController',
      controllerAs: 'FormCtrl'
    })
    .when('/user',{
      templateUrl: 'views/user.tpl.html',
      controller: 'UserController',
      controllerAs: 'UserCtrl'
    })
    .otherwise({
      redirectTo:'/form'
    });
  }

  function AppRun($rootScope){
    $rootScope.loading = false;

    $rootScope.ajaxErrObj = {};
  }


  // inject the dependencies
  AppConfig.$inject = ['$routeProvider'];
  AppRun.$inject = ['$rootScope'];

  // define the module
  angular.module('angularApp',['ngRoute',
    'angularApp.controllers','angularApp.services','angularApp.directives'])
  .config(AppConfig)
  .run(AppRun);

  // create another module just for controllers
  angular.module('angularApp.controllers',[]);

  // create another module just for services
  angular.module('angularApp.services',[]);

  // create another module just for directives
  angular.module('angularApp.directives',[]);
})(window.angular || (window.angular = {}));


















