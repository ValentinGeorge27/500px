angular.module('photosApp')
    .controller('NavCtrl', ['$scope', 'Auth',
        function($scope, Auth){
            /*$scope.signedIn = Auth.isAuthenticated;
            $scope.logout = Auth.logout;

            Auth.currentUser().then(function (user){
                $scope.user = user;
            });

            $scope.$on('new-registration', function (e, user){
                $scope.user = user;
            });

            $scope.$on('login', function (e, user){
                $scope.user = user;
            });

            $scope.$on('logout', function (e, user){
                alert(user.username + ' you are signed out!');
                $scope.user = {};
            });*/
        }]);
