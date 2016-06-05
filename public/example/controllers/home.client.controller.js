angular.module('example').controller('ExampleController', ['$scope', '$location',
    function($scope, $location) {
        $scope.isActive = function(route) {
            return route === $location.path();
        };
    },
]);

angular.module('example').controller('CarouselDemoCtrl', function($scope) {
    $scope.myInterval = 4000;
    $scope.noWrapSlides = true;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
        var newWidth = 600 + slides.length + 1;
        slides.push({
            image: 'images/slider/slide1.png',
            id: currIndex++
        },
            {
                image: 'images/slider/slide2.png',
                id: currIndex++
            },
            {
                image: 'images/slider/slide3.png',
                id: currIndex++
            },
            {
                image: 'images/slider/slide4.png',
                id: currIndex++
            },
            {
                image: 'images/slider/slide5.png',
                id: currIndex++
            });
    };

    for (var i = 0; i < 1; i++) {
        if (currIndex >= 5)
            currIndex = 0;
        $scope.addSlide();
    }


});

