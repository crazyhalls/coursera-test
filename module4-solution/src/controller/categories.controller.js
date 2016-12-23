(function () {

angular.module('data')
    .controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['MenuDataService'];
function CategoriesController(MenuDataService) {
    var categoriesCtrl = this;
    
    categoriesCtrl.title = "Below are the categories available";
    categoriesCtrl.categories = [];
    categoriesCtrl.items = [];

    categoriesCtrl.$onInit = function() {
        MenuDataService.getAllCategories().then(
            function(result) {
                categoriesCtrl.categories = result;
            }
        );
    };

    categoriesCtrl.getItems = function(category) {
        MenuDataService.getItemsForCategory(category).then(
            function(result) {
                categoriesCtrl.items = result;
            }
        );
    }
}

})();
