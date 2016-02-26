angular.module('photosApp')
    .factory('photos', ['$http',function($http){
        var photos = {
            photos: []
        };

        photos.getAll = function(){
            return $http.get('/photos.json').success(function(data){
               angular.copy(data, o.photos)
            });
        };

        return photos;
    }]);