angular.module('photosApp')
    .factory('AuthToken', function(){
        var authToken = {};

        authToken.set = function( newToken, newUser ) {
            localStorage.setItem('auth_token', newToken );
            localStorage.setItem('user', JSON.stringify(newUser));
        };

        authToken.get = function(key){
          return localStorage.getItem(key);
        };

        authToken.unset = function(key){
            localStorage.removeItem(key);
            console.log(localStorage.getItem(key));
        };

        return authToken;
    });