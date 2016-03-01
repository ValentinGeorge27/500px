angular.module('photosApp')
    .directive('facebook', function($http) {
        return {
            restrict: 'A',
            scope: true,
            controller: function($scope, $attrs) {
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
                    ).success(function(data) {
                        $scope.fetch_status = data.status;
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
    });
