'use strict';
angular.module('AiB.pages.mail', [])
    .config(routeConfig);
function routeConfig($stateProvider){
    $stateProvider
    .state('mail', {
        url: '/mail',
        title: 'Mail',
        templateUrl: 'app/pages/mail/mail.html',
        controller: 'mailCtrl'
    });
}