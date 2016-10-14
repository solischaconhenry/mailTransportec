  'use strict';

  angular.module('usersApp')
  .controller('UserController',['$state',function($state){
    var th = this;

    th.toDashboard = function(){
      $state.go('dashboard');
    };

  }]);
