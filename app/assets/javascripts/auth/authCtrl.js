angular.module('photosApp')
    .controller('AuthCtrl', ['$scope', '$state', 'AuthService', 'errorService',
        function($scope, $state, AuthService, errorService){

            $scope.errors = {message: null, errors: {}};

            $scope.login = function() {
                AuthService.login($scope.user.email, $scope.user.password).then(function(){
                    $state.go('photos');
                }, function(data, status) {
                    errorService.failure( data, status, $scope);
                });
            };
/*
            $scope.register = function() {
                Auth.register($scope.user).then(function(){
                    $state.go('photos');
                }, function(data, status) {
                    errorService.failure( data, status, $scope);
                });
            };*/

            $scope.reset_users = function() {
                $scope.user = { email: null, username: null, password: null };
            };

            /*$scope.logout = function() {
                Auth.logout($scope.user).then(function(){
                    $state.go('login');
                }, function(data, status) {
                    errorService.failure( data, status, $scope);
                });
            };*/
        }]);
