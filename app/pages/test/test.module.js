'use strict';
angular.module('AiB.pages.test',[])
    .config(routeConfig);
function routeConfig($stateProvider){
    $stateProvider
    .state('test',{
        url: '/test',
        title: 'Test',
        templateUrl: 'app/pages/test/test.html',
        controller: 'testCtrl'
    });
}