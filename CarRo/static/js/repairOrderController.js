(function () {
    'use strict';
    angular.module('carRO').controller('repairOrderController', ['$scope', '$http', repairOrderController]);

    function repairOrderController($scope, $http) {
        $scope.add = function (){
            $http.post('/repair/', $scope.repairOrder).then(
                function (response) {
                    console.log(response)
                },
                function () {
                    console.log("Could not add repair orders")
                }
            );
        }
    }
}());
