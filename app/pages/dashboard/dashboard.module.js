'use strict';
angular.module('AiB.pages.dashboard', [])
    .config(routeConfig);
function routeConfig($stateProvider){
    $stateProvider
    .state('dashboard',{
        url: '/dashboard',
        title: 'Dashboard',
        templateUrl: 'app/pages/dashboard/dashboard.html',
        controller: 'dashboardCtrl',
    });
}