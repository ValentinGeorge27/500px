photosModule = angular.module('photosApp', [
              'ui.router', 'templates', 'Devise']);

photosModule.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('/', {
                templateUrl: "index.html",
                controller: 'mainCtrl'
            })
        .state('login', {
            url: '/login',
            templateUrl: 'auth/_login.html',
            controller: 'AuthController'
        })
        .state('register', {
            url: '/register',
            templateUrl: 'auth/_register.html',
            controller: 'AuthController'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'home/_home.html',
            controller: 'MainController'
        })
        .state('photos', {
                url: '/photos',
                templateUrl: 'photos/_photos.html',
                controller: 'PhotosController',
                resolve: {
                    photoPromise: ['photos', function(photos) {
                        return photos.getAll();
                    }]
                }
        });

        $urlRouterProvider.otherwise('login');
    }])
        .run(['$rootScope', '$window',
            function($rootScope, $window) {
                $rootScope.user = {};
                $window.fbAsyncInit = function () {

                    FB.init({
                        appId: '765195356914763',
                        channelUrl: '//localhost:3000/channel.html',
                        status: true,
                        cookie: true,
                        xfbml: true,
                        version: '2.5'
                    });
                    FB.getLoginStatus(function(response) {
                        if (response.status === 'connected') {
                            // connected
                            $rootScope.auth = response.authResponse;
                        } else if (response.status === 'not_authorized') {
                            // not_authorized
                        } else {
                            // not_logged_in
                        }
                        $rootScope.login_status = response.status;
                        $rootScope.$apply();
                    });

                };

                (function (d) {
                    // load the Facebook javascript SDK
                    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];

                    if (d.getElementById(id)) { return;}
                    js = d.createElement('script'); js.id = id; js.async = true;
                    js.src = "//connect.facebook.net/en_US/all.js";
                    ref.parentNode.insertBefore(js, ref);
                }(document));

            }]);