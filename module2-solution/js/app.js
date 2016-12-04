(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var itemToBuy = this;

      itemToBuy.list = function () {
        ShoppingListCheckOffService.getList();
      }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var itemBought = this;

      itemBought.buyItem = function (index) {
        try {
          ShoppingListCheckOffService.buyItem(index);
        } catch (error) {
          itemBought.errorMessage = error.message;
        }

      }
    }

    function ShoppingListCheckOffService() {
      var service = this;

      var itemList = [{ name: "cookies", quantity: 10 },
                  { name: "cheese cakes", quantity: 2 },
                  { name: "brownies", quantity: 12 },
                  { name: "ice cream sandwich", quantity: 40 },
                  { name: "apple pie", quantity: 19 }];

      var toBuyList = [];
      // var boughtList = [];

      service.buyItem = function (index) {
        var boughtList = {
          name: itemName,
          quantity: quantity
        };
        boughtList.push(item);
      };

      service.getList = function () {
        toBuyList = itemList;
        return toBuyList;
      };
    }

})();
