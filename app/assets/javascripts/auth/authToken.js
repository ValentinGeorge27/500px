angular.module('photosApp')
    .factory('AuthToken', function(){
        var authToken = {};
        var token = 'none';

        authToken.set = function( newToken ) {
            token = newToken;
        };

        authToken.get = function(){
          return token;
        };

        return authToken;
    });