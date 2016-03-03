angular.module('photosApp')
    .controller('NavCtrl', ['$scope','$state', 'AuthService', 'CurrentUser', 'errorService',
        function($scope, $state, AuthService, currentUser, errorService){
            $scope.signedIn = AuthService.isAuthenticated;
            $scope.user = currentUser;

            $scope.logout = function() {
                AuthService.logout();
                    $state.go('login');
            };

        }]);
