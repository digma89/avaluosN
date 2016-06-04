angular.module('example').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '/example/views/partials/home.client.view.html',
                activetab: '1' 
            }).
             when('/quienesSomos', {
                templateUrl: '/example/views/partials/quienesSomos.client.view.html',
                activetab: '2' 
            }).
             when('/servicios', {
                templateUrl: '/example/views/partials/servicios.client.view.html',
                activetab: '3' 
            }).
             when('/contacto', {
                templateUrl: '/example/views/partials/contacto.client.view.html',
                activetab: '4', 
                controller: 'contactoController'
            }).
            otherwise({
                redirecTo: '/'
            });
    }
]);


