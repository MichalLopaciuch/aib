'use strict';
angular.module('AiB.pages',[
    'ui.router',
    'AiB.pages.dashboard',
    'AiB.pages.test'
])
    .config(routeConfig);
    
function routeConfig($urlRouterProvider, $qProvider){
    $qProvider.errorOnUnhandledRejections(false);
    $urlRouterProvider.otherwise('/dashboard');
}