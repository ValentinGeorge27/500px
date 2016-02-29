photosModule = angular.module('photosApp', [
              'ui.router', 'templates', 'Devise'])

photosModule.config(['$stateProvider', '$urlRouterProvider',
          ($stateProvider, $urlRouterProvider)->
            $stateProvider
                .state('/',
                  templateUrl: "index.html"
                  controller: 'mainCtrl'
                )
                .state('login', {
                    url: '/login',
                    templateUrl: 'auth/_login.html',
                    controller: 'AuthCtrl',
                    onEnter: ['$state', 'Auth', ($state, Auth) ->
                        Auth.currentUser().then( () ->
                            $state.go('home');
                        )
                    ]
                })
                .state('logout', {
                    onEnter: ['$state', 'Auth', ($state, Auth) ->
                      Auth.isAuthenticated().catch( () ->
                          $state.go('login');
                      )
                    ]
                })
                .state('register', {
                    url: '/register',
                    templateUrl: 'auth/_register.html',
                    controller: 'AuthCtrl',
                    onEnter: ['$state', 'Auth', ($state, Auth) ->
                        Auth.currentUser().then( () ->
                            $state.go('home');
                        )
                    ]
                })
                .state('home', {
                    url: '/home',
                    templateUrl: 'home/_home.html',
                    controller: 'MainCtrl'
                })
                .state('photos', {
                    url: '/photos',
                    templateUrl: 'photos/_photos.html',
                    controller: 'PhotosCtrl',
                    resolve: {
                        photoPromise: ['photos', (photos) ->
                            return photos.getAll();
                        ]
                    }
                });

            $urlRouterProvider.otherwise('login');
        ]);

