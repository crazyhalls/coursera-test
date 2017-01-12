(function() {
    "use strict";

    angular.module('common')
        .service('InfoService', InfoService);

    function InfoService() {
        var service = this;
        var _info = null;

        service.savePreferences = function(menuItem, user) {
            _info = new Object();
            _info.menuItem = menuItem;
            _info.user = user;
        };


        service.getPreferences = function() {
            return _info;
        };

        service.getMenuItem = function() {
            return _info.menuItem;
        };

    }


})();
