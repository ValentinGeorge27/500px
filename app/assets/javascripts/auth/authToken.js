angular.module('photosApp')
    .factory('AuthToken', function(){
        var authToken = {};
        var token = 'none';
        var user= {};

        authToken.set = function( newToken, newUser ) {
            token = newToken;
            user = newUser;
        };

        authToken.get = function(){
          return token;
        };

        authToken.getUser = function(){
            return user;
        };

        authToken.unset = function(){
            token = 'none';
        };

        return authToken;
    });