angular.module('photosApp')
    .service("AuthService", ['$http','$q', 'AuthToken', 'AuthEvents', function($http, $q, $rootScope, authToken, AuthEvents) {
        return {
            login: function(email, password) {
                var d = $q.defer();
                $http.post('/auth', {
                    email: email,
                    password: password
                }).success(function(resp) {
                    authToken.set(resp.auth_token);
                    $rootScope.$broadcast(AuthEvents.loginSuccess);
                    d.resolve(resp.user);
                }).error(function(resp) {
                    $rootScope.$broadcast(AuthEvents.loginFailed);
                    d.reject(resp.error);
                });
                return d.promise;
            }
        };
    }]);