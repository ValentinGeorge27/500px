angular.module('flapperNews', ['ui.router', 'templates', 'Devise'])
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'auth/_login.html',
                    controller: 'AuthCtrl',
                    onEnter: ['$state', 'Auth', function($state, Auth) {
                        Auth.currentUser().then(function (){
                            $state.go('home');
                        })
                    }]
                })
                .state('register', {
                    url: '/register',
                    templateUrl: 'auth/_register.html',
                    controller: 'AuthCtrl',
                    onEnter: ['$state', 'Auth', function($state, Auth) {
                        Auth.currentUser().then(function (){
                            $state.go('home');
                        })
                    }]
                })
                .state('home', {
                    url: '/home',
                    templateUrl: 'home/_home.html',
                    controller: 'MainCtrl',
                    resolve: {
                        photoPromise: ['photos', function(photos){
                            return photos.getAll();
                        }]
                    }
                })
                .state('photos', {
                    url: '/photos',
                    templateUrl: 'photos/_photos.html',
                    controller: 'PhotosCtrl'
                });

            $urlRouterProvider.otherwise('home');
        }]);

