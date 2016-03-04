angular.module('photosApp')
    .service('500pxAuthService', function(){
        return {
            login: function(){
                console.log('500px');
                _500px.login(function (status) {
                    if (status == 'authorized') {
                        alert('You have logged in');
                        _500px.api('/users', function (response) {
                            // .......
                        });
                    } else {
                        alert('You denied my application');
                    }
                });
            }
        }
    });