'use strict';
angular.module('AiB.pages.employees', [])
    .config(routeConfig);
function routeConfig($stateProvider){
    $stateProvider
    .state('employees',{
        url: '/employees',
        title: 'Employees',
        templateUrl: 'app/pages/employees/employees.html',
        controller: 'employeesCtrl'
    });
}