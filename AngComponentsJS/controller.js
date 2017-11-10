(function(){
'use strict';
angular.module('myApp')
    .controller('tableDataDisplay', ['$scope', '$log', 'dataService', function ($scope, $log, dataService) {
        $scope.dataObj
        $scope.dataObjVal = [];
        $scope.dataObjKey = [];
        $scope.dataFormated = [];
         
        $scope.sortOrder = false;
        $scope.sortColumnName;

        dataService.getData().then(function (response) {
            
            $scope.dataObj = response;

        }, function (rejected) {
            $log.info(rejected)
        });


        $scope.sortColumn = function (column) {
            //if cleicked first time it will set the order to false means ASC
            //if not it will change the order.
            $scope.sortOrder = ($scope.sortColumnName == column) ? !$scope.sortOrder : false;
            $scope.sortColumnName = column;
        }

 
}])
    
}());