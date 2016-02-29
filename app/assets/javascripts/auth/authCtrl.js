angular.module('photosApp')
    .controller('AuthCtrl', ['$scope', '$state', 'Auth', 'errorService',
        function($scope, $state, Auth, errorService){

            $scope.errors = {message: null, errors: {}};

            $scope.login = function() {
                Auth.login($scope.user).then(function(){
                    $state.go('photos');
                }, function(data, status) {
                    errorService.failure( data, status, $scope);
                });
            };

            $scope.register = function() {
                Auth.register($scope.user).then(function(){
                    $state.go('photos');
                }, function(data, status) {
                    errorService.failure( data, status, $scope);
                });
            };

            $scope.reset_users = function() {
                $scope.user = { email: null, username: null, password: null };
            };

            $scope.logout = function() {
                Auth.logout($scope.user).then(function(){
                    $state.go('login');
                }, function(data, status) {
                    errorService.failure( data, status, $scope);
                });
            };
        }]);
