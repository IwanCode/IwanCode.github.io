
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
            templateUrl: "pages.html",
            redirectTo: 'pages.list3'
        })
        .state('pages.list3', {
            url: "/list",
            templateUrl: "pages.list3.html"
        })
        .state('pages.list1', {
            url: "/list",
            templateUrl: "pages.list1.html"
        })
        .state('blog', {
            url: "/blog",
            templateUrl: "blog.html",
            redirectTo: 'blog.starter'
        })
        .state('blog.starter', {
            url: "/list",
            templateUrl: "blog.starter.html"
        })
        .state('blog.list1', {
            url: "/list1",
            templateUrl: "blog.list1.html"
        })
        .state('blog.list2', {
            url: "/list2",
            templateUrl: "blog.list2.html"
        })
        .state('blog.list3', {
            url: "/list3",
            templateUrl: "blog.list3.html"
        })
        .state('details', {
            url: "/details",
            templateUrl: "details.html"
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