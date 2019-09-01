(function () {
    'use strict';
    angular.module('carRO').controller('boardController', ['$scope', '$http', 'moment', boardController]);

    function boardController($scope, $http, moment) {
        $http.get('/repair/').then(
            function (response) {
                $scope.repairOrders = response.data;
                console.log($scope.repairOrders)
                $scope.repairOrders.map(ro => (
                    ro.date = moment(ro.date).format("YYYY-MM-DD HH:mm")
                ));
                $scope.repairOrders.map(ro => (
                    ro.vehicleName = ro.vehicle.make + " " + ro.vehicle.model
                ));
                console.log($scope.repairOrders)
            },
            function () {
                console.log("Could not get repair orders")
            }
        );
    }

}());
