(function() {

    angular.module('data')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService'];

    function CategoriesController(MenuDataService) {
        var categorieCtrl = this;

        categorieCtrl.items = [];
        categorieCtrl.categories = [];

        categorieCtrl.$onInit = function() {
            MenuDataService.getAllCategories().then(
                function(result) {
                    categorieCtrl.categories = result;
                }
            );
        };

        categorieCtrl.getItems = function(category) {
            MenuDataService.getItemsForCategory(category).then(
                function(result) {
                    categorieCtrl.items = result;
                }
            );
        }
    }

})();
