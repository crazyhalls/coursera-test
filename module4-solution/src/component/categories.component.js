(function () {

angular.module('data')
    .component('categories', {
        templateUrl: 'src/view/component-template/categories.component.html',
        bindings: {
            categories : '<'
        }
    });

})();
