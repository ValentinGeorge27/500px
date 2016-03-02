angular.module('photosApp')
    .factory('CurrentUser',['AuthToken', function(AuthToken){
        return {
            user: function(){
                if(AuthToken.get())
                    return AuthToken.getUser();
                else
                    return {}
            }
        }
    }]);