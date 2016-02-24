angular.module('flapperNews')
    .controller('AuthCtrl', ['$scope', '$state', 'Auth',
        function($scope, $state, Auth){
            $scope.login = function() {
                Auth.login($scope.user).then(function(){
                    $state.go('photos');
                }, function(error) {
                    $scope.login_error = error.data;
                });
            };

            $scope.register = function() {
                Auth.register($scope.user).then(function(){
                    $state.go('photos');
                });
            };

            $scope.logout = function() {
                Auth.logout($scope.user).then(function(){
                    $state.go('login');
                });
            };
        }]);
