'use strict';
angular.module('AiB.pages.findings', [])
    .config(routeConfig);
function routeConfig($stateProvider){
    $stateProvider
    .state('findings', {
        url: '/findings',
        title: 'Findings',
        templateUrl: 'app/pages/findings/findings.html',
        controller: 'findingsCtrl'
    });
}