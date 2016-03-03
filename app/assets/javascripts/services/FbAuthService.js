angular.module('photosApp')
    .directive('facebook', ['$http','AuthToken','AuthEvents', function($http, authToken, AuthEvents) {
        return {
            restrict: 'A',
            scope: true,
            controller: function($scope, $location, $attrs) {
                function login() {
                    FB.login(function(response) {
                            if (response.authResponse) {
                                console.log('FB.login connected');
                                fetch();
                            } else {
                                console.log('FB.login cancelled');
                            }
                        }, {
                            scope: 'email,public_profile'
                    });
                }

                function fetch() {
                    $http.post('/facebook/fetch', $scope.auth
                    ).success(function(resp) {
                        $scope.fetch_status = resp.status;
                        authToken.set(resp.auth_token, resp.user);
                        $scope.$broadcast(AuthEvents.loginSuccess);
                        $location.path('/photos');
                    }).error(function(data) {
                        console.log('error: '+data);
                        $scope.fetch_status = data.status;
                    });
                }

                $scope.fetch = function() {
                    if ($scope.login_status == 'connected') {
                        console.log('fetch');
                        fetch();
                    } else {
                        login();
                    }
                };
            }
        }
    }]);
