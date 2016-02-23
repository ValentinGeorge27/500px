angular.module('flapperNews')
    .controller('PhotosCtrl', ['$scope', '$stateParams', 'photos',
        function($scope, $stateParams, photos){
            $scope.photos = photos.photos[$stateParams.id];
        }]);