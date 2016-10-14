  'use strict';

  angular.module('usersApp')
  .controller('DashboardController',['$state',function($state){
    var th = this;

    th.toUser = function(){
      $state.go('user');
    };

  }]);

