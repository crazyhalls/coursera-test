(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['preferences'];
function InfoController(preferences) {
  var $infoCtrl = this;
  $infoCtrl.preferences = preferences;
}

})();
