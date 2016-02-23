angular.module('flapperNews', ['ui.router', 'templates'])
    .config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {

            $stateProvider
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

