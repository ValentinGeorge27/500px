describe("photosCtrl", function() {

    var controller, scope, factory;

    beforeEach(module("photosApp"));

    beforeEach(inject(function($controller, $rootScope, $injector){
        scope = $rootScope.$new();
        factory = $injector.get('photos');
        controller = $controller('PhotosCtrl', {
            $scope: scope,
            photos: factory
        });
    }));

    describe('Test inject', function () {
        it("this dummy checks injecting of settings controller", function () {
            expect(controller).toBeDefined();
        });
    });
});