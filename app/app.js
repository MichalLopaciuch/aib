'use strict';
angular.module('AiB',[
    'ui.router',
    'ngAnimate',
    'AiB.pages'
])
    .controller('indexCtrl', indexCtrl)
    .run([
    function(){
        if(sessionStorage.getItem('redir') == 'true')
            window.location.href="welcome.html";
    }]);

function indexCtrl(){
    var vm = this;
}