angular.module('photosApp')
    .factory('photos', ['$http',function($http){
        var o = {
            photos: []
        };

        o.getAll = function(){
            return $http.get('/photos.json').success(function(data){
               angular.copy(data, o.photos)
            });
        };

        return o;
    }]);