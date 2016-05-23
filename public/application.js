var mainApplicationModuleName = 'mean';

var mainApplicationModule = angular.module(mainApplicationModuleName, ['ngRoute','example','ui.bootstrap','ngAnimate']);

mainApplicationModule.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

mainApplicationModule.config(['$routeProvider', '$compileProvider', function($routeProvider, $compileProvider) {
    //configure routeProvider as usual
    $compileProvider.debugInfoEnabled(false);
}]);

angular.element(document).ready(function(){
    angular.bootstrap(document, [mainApplicationModuleName]);
});

