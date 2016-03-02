angular.module('photosApp')
    .controller('NavCtrl', ['$scope', 'AuthService', 'CurrentUser',
        function($scope, AuthService, CurrentUser){
            $scope.signedIn = AuthService.isAuthenticated;
            $scope.user = CurrentUser.user;

            $scope.logout = function(){
                AuthService.logout();
                $scope.user = {}
            }

        }]);
