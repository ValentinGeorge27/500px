describe('Photos', function() {
    var factory;
    beforeEach( function(){
        module("photos");

        inject(function($injector){
            factory = $injector.get('Photos');
        })
    });
});