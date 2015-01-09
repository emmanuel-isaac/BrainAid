'use strict';

var appModule = angular.module('appModule', ['ngAnimate']);

appModule.controller('appController', ['$scope', '$http', function ($scope, $http) {
  $scope.showTasks = function () {
    $http.get('https://helpmeremember.herokuapp.com/todos')

    .success(function (data) {
      console.log(data);
      $scope.pendingTasks = data;
    });

  };
  $scope.showTasks();
  

  $scope.addNewTask = function (title, details) {
    var newtitle = $scope.title;
    var newdetails = $scope.details;

    $http({
      method  : 'POST',
      url     : 'https://helpmeremember.herokuapp.com/todos',  
      headers : { 'Content-Type': 'application/x-www-form-urlencoded' },
      // transformRequest: function(obj) {
      //   var str = [];
      //   for(var p in obj)
      //   str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      //   return str.join("&");
      // },
      data    : $.param({title: newtitle, details: newdetails})  
     }
    )

    .success(function (data) {
      console.log(data);
      $scope.showTasks();
    });
  };

  $scope.showForm = false;
}]);