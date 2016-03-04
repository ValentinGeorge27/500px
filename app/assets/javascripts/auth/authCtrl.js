angular.module('photosApp')
    .controller('AuthCtrl', ['$scope', '$state', 'AuthService', 'errorService', '500pxAuthService',
        function($scope, $state, AuthService, errorService, F00pxAuthService){

            $scope.errors = {message: null, errors: {}};

            $scope.login500px = function() {
              F00pxAuthService.login().then(function(){
                  $state.go('photos');
              }, function(data, status) {
                  errorService.failure( data, status, $scope);
              });
            };

            $scope.login = function() {
                AuthService.login($scope.user.email, $scope.user.password).then(function(){
                    $state.go('photos');
                }, function(data, status) {
                    errorService.failure( data, status, $scope);
                });
            };

            $scope.register = function() {
                AuthService.register($scope.user).then(function(){
                    $state.go('photos');
                }, function(data, status) {
                    errorService.failure( data, status, $scope);
                });
            };

            $scope.reset_users = function() {
                $scope.user = { email: null, username: null, password: null };
            };
        }]);
