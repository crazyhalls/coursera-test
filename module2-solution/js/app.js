(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])

        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var itemToBuy = this;

        itemToBuy.items = ShoppingListCheckOffService.getListofItemsToBuy();

        itemToBuy.buyItem = function(index) {
            try {
                ShoppingListCheckOffService.addItem(index);
            } catch (error) {
                itemToBuy.errorMessage = error.message;
            }
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var itemBought = this;

        itemBought.items = ShoppingListCheckOffService.getListofBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var itemList = [{
            name: "cookies",
            quantity: 10
        }, {
            name: "cheese cakes",
            quantity: 2
        }, {
            name: "brownies",
            quantity: 12
        }, {
            name: "ice cream sandwich",
            quantity: 40
        }, {
            name: "apple pie",
            quantity: 19
        }];

        var toBuyList = itemList;
        var boughtList = [];

        service.addItem = function(index) {
            boughtList.push(toBuyList[index]);
            service.removeItem(index);
        };

        service.removeItem = function(index) {
            toBuyList.splice(index, 1);
        };

        service.getListofItemsToBuy = function() {
            return toBuyList;
        };

        service.getListofBoughtItems = function() {
            return boughtList;
        };
    }

})();
