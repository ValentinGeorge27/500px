angular.module('flapperNews')
    .controller('MainCtrl', ['$scope', 'photos',
        function($scope, photos){
            $scope.photos = photos.photos;

            $scope.incrementUpvotes = function(photo) {
                photo.positive_votes_count += 1;
            };
        }]);