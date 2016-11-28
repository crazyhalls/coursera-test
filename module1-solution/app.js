(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunch = "";
  var count = 0;

  $scope.checkLunch = function ($scope.lunch) {
    var lunchItens = $scope.lunch.split(",");
    console.log(lunchItens);
  };
}

})();
