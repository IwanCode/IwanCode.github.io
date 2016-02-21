
var myapp = angular.module('myapp', ["ui.router"]);
myapp.config(function($stateProvider, $urlRouterProvider){

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "home.html"
        })
        .state('shop', {
            url: "/shop",
            templateUrl: "shop.html",
            redirectTo: 'shop.list3'
        })
        .state('shop.list3', {
            url: "/list",
            templateUrl: "shop.list3.html"
        })
        .state('shop.list1', {
            url: "/list",
            templateUrl: "shop.list1.html"
        })
        .state('pages', {
            url: "/pages",
            templateUrl: "pages.html"
        });
});

myapp.run(['$rootScope', '$state', function($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
        if (to.redirectTo) {
            evt.preventDefault();
            $state.go(to.redirectTo, params)
        }
    });
}]);