(function() {

    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http']

    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function() {
            return $http.get('https://davids-restaurant.herokuapp.com/categories.json')
                .then(function(response) {
                    var allCategories = [];
                    for (var i = 0; i < response.data.length; i++) {
                        allCategories.push(response.data[i]);
                    }
                    return allCategories;
                });
        };

        service.getItemsForCategory = function(categoryShortName) {
            return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
                .then(function(response) {
                    var item_names = [];
                    var menuItems = response.data.menu_items;
                    for (var i = 0; i < menuItems.length; i++) {
                        item_names.push(menuItems[i]);
                    }
                    return item_names;
                });
        };
    }

})();
