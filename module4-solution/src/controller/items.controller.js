(function() {

    angular.module('data')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['$stateParams', 'MenuDataService'];

    function ItemsController($stateParams, MenuDataService) {
        var itemsCtrl = this;
        itemsCtrl.items = [];

        itemsCtrl.$onInit = function() {
            MenuDataService.getItemsForCategory($stateParams.categoryId).then(
                function(result) {
                    itemsCtrl.items = result;
                }
            );
        };
    }

})();
