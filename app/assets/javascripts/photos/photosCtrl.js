angular.module('photosApp')
    .controller('PhotosCtrl', ['$scope', '$stateParams', 'photos',
        function($scope, $stateParams, photos, currentUser){
            $scope.photos = photos.photos;
        }]);