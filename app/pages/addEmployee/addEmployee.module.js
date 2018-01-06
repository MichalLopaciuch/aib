'use strict';
angular.module('AiB.pages.addEmployee', [])
    .config(routeConfig);
function routeConfig($stateProvider){
    $stateProvider
    .state('addEmployee', {
        url: '/addEmployee',
        title: 'AddEmployee',
        templateUrl: 'app/pages/addEmployee/addEmployee.html',
        controller: 'addEmployeeCtrl'
    });
}