(function() {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'InfoService'];

    function SignUpController(MenuService, InfoService) {
        var signUpCtrl = this;

        signUpCtrl.submit = function() {
            var promise = MenuService.getMenuItem(signUpCtrl.user.favorite);
            signUpCtrl.successMsg = null;
            signUpCtrl.error = null;
            signUpCtrl.menuitem = null;

            promise.then(function(response) {
                    if (response) {
                        InfoService.savePreferences(response, signUpCtrl.user);
                        signUpCtrl.successMsg = "Your information has been saved"
                    } else {
                        signUpCtrl.error = "No such menu number exists";
                    }
                })
                .catch(function(error) {
                    signUpCtrl.error = error;
                });

        };
    }

})();
