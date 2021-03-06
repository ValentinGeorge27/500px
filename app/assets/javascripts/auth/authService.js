angular.module('photosApp')
    .service("AuthService", ['$http','$q', '$rootScope', 'AuthToken', 'AuthEvents', function($http, $q, $rootScope, authToken, AuthEvents) {
        return {
            isAuthenticated: function(){
                return authToken.get('user');
            },
            login: function(email, password) {
                var d = $q.defer();
                $http.post('/auth', {
                    email: email,
                    password: password
                }).success(function(resp) {
                    authToken.set(resp.auth_token, resp.user);
                    $rootScope.$broadcast(AuthEvents.loginSuccess);
                    d.resolve(resp.user);
                }).error(function(resp) {
                    $rootScope.$broadcast(AuthEvents.loginFailed);
                    d.reject(resp.error);
                });
                return d.promise;
            },
            logout: function(){
                console.log('logout');
                authToken.unset('auth_token');
                authToken.unset('user');
            },
            register: function(email,username,password){
                authToken.unset();
                var d = $q.defer();
                $http.post('/register', {
                    email: email,
                    username: username,
                    password: password
                }).success(function(resp) {
                    authToken.set(resp.auth_token, resp.user);
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