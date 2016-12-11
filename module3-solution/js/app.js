(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)
        .controller('FoundItemsDirectiveController', FoundItemsDirectiveController);

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var narrowCtrl = this;

        narrowCtrl.searchTerm = '';
        narrowCtrl.found = [];

        narrowCtrl.searchText = function() {
          if (narrowCtrl.searchTerm !== '')
            MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm)
            .then(function(items) {
              narrowCtrl.found = items;
            });
        };

        narrowCtrl.removeItem = function(index) {
            narrowCtrl.found.splice(index, 1);
        };
    }

    function FoundItemsDirectiveController() {
        var foundItemsDirCtrl = this;

        foundItemsDirCtrl.noItems = function() {
            if(foundItemsDirCtrl.items.length === 0){
              return true;
            }else{
              return false;
            }
        };
    }

    MenuSearchService.$inject = ['$http', '$q'];

    function MenuSearchService($http, $q) {
        var service = this;

        service.getMatchedMenuItems = function(search) {
            var deferred = $q.defer();
            var foundItems = []

            $http({
                    method: 'GET',
                    url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
                })
                .then(function(response) {
                    var items = response.data.menu_items;

                    var filteredItems = items.filter(function(item) {
                        return item.description.indexOf(search) !== -1;
                    });

                    deferred.resolve(filteredItems);
                })
                .catch(function(error) {
                    deferred.reject(error);
                });
                foundItems = deferred.promise;

            return foundItems;
        };
    }

    function FoundItemsDirective() {
        var ddo = {
            scope: {
                items: '<',
                onRemove: '&'
            },
            templateUrl: 'directive/foundItems.html',
            controller: 'FoundItemsDirectiveController as foundItemsDirCtrl',
            bindToController: true
        };

        return ddo;
    }
})();
