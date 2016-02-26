describe('factory: photos', function() {
    var factory, $httpBackend;
    beforeEach( function(){
        module("photosApp");

        inject(function($injector, _$httpBackend_){
            // Set up the mock http service responses
            factory = $injector.get('photos');
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET', 'Photos/photos.json').respond([{id: 1, image_url: 'http://url1.com'}, {id:2, image_url: 'http://url12.com'}]);
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
        $httpBackend.flush();
        expect(factory.photos.length).toBe(2);
        expect(factory.photos[0].image_url).toBe('http://url1.com');
    });

    /*it('Should define methods', function(){
        expect(factory.getAll()).toBeDefined();
    });*/


});