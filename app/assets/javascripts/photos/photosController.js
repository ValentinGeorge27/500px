angular.module('photosApp')
    .controller('PhotosController', ['$scope', '$stateParams', 'photos',
        function($scope, $stateParams, photos, currentUser){
            $scope.photos = photos.photos;
        }]);