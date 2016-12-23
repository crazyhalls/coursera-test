(function() {

    angular.module('data')
        .component('items', {
            templateUrl: 'src/view/component-template/items.component.html',
            bindings: {
                items: '<'
            }
        });

})();
