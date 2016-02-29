describe('factory: photos', function() {
    var factory, $httpBackend;
    beforeEach( function(){
        module("photosApp");

        inject(function($injector, _$httpBackend_){

            // Set up the mock http service responses
            factory = $injector.get('photos');
            console.log(factory);
            $httpBackend = _$httpBackend_;
            $httpBackend.whenGET('photos.json').respond({ photos: [{id: 1, image_url: 'http://url1.com'}, {id:2, image_url: 'http://url12.com'}]});

        });
    });

    // after each test, this ensure that every expected http calls have been realized and only them
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('can get an instance of my factory', inject(function(photos) {
        expect(photos).toBeDefined();
    }));

    it('default photos array should be null', function(){
      expect(factory.photos).toEqual([]);
    });

    it('should fetch list of photos', function(){
        factory.then(function(photos){
            expect(factory.length).toEqual(2);
            expect(factory.photos[0].image_url).toBe('http://url1.com');
            done();
        });

        $httpBackend.flush();
    });

    /*it('Should define methods', function(){
        expect(factory.getAll()).toBeDefined();
    });*/


});