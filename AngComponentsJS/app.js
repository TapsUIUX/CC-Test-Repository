(function(){
'use strict';
angular.module('myApp', ['ngRoute', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('home', {
                    url:'/home',
                    templateUrl: 'Components/home.html',
                    controller: 'tableDataDisplay'
                })

                .state('formatted', {
                    url:'/formatted',
                    templateUrl: 'Components/category.html',
                    controller: 'tableDataDisplay'
                })  
                
                .state('explanation', {
                    url:'/explanation',
                    templateUrl: 'Components/explanation.html'                    
                })
    
    
                $urlRouterProvider.otherwise('/home');

        }]);
}());
