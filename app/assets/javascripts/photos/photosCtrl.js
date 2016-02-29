angular.module('photosApp')
    .controller('PhotosCtrl', ['$scope', '$stateParams', 'photos',
        function($scope, $stateParams, photos){
            $scope.photos = photos.photos;
        }]);