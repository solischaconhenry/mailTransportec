  'use strict';

  var app = angular.module('usersApp',
  ['ui.router']);
  angular.module('usersApp')
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/user');
      
    $stateProvider
    .state('user',{
        url:'/user',
        templateUrl:'user/user.html',
        controller:'UserController',
        controllerAs:'user'
      })
      .state('dashboard',{
          url:'/dashboard',
          templateUrl:'dashboard/dashboard.html',
          controller:'DashboardController',
          controllerAs:'dashboard'
        });
  });
