angular.module('photosApp')
    .controller('NavController', ['$scope','$state', 'AuthService', 'CurrentUser', 'errorService',
        function($scope, $state, AuthService, currentUser, errorService){
            $scope.signedIn = AuthService.isAuthenticated;
            $scope.user = currentUser;

            $scope.logout = function() {
                AuthService.logout();
                    $state.go('login');
            };

        }]);
