(function() {

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'src/view/home.html'
            })

        .state('categories.getItems', {
            templateUrl: 'src/view/items.html',
            controller: 'ItemsController as itemsCtrl',
            params: {
                categoryId: null
            }
        })

        .state('categories', {
            url: '/categories',
            templateUrl: 'src/view/categories.html',
            controller: 'CategoriesController as categoriesCtrl'
        });
    }


})();
