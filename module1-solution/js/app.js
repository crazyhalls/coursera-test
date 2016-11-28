(function() {
    'use strict';

    angular.module('LunchChecker', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunch = "";
        $scope.notify = "";

        $scope.checkLunch = function() {

            if ($scope.lunch) {
                var lunchItens = $scope.lunch.split(",");
                if (lunchItens.length <= 3) {
                    $scope.notify = "Enjoy!";
                } else if (lunchItens.length > 3) {
                    $scope.notify = "Too much!";
                }
            } else {
                $scope.notify = "Please enter data first";
            }
        };
    }

})();
