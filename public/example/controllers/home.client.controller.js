angular.module('example').controller('MainCtrl', ['$scope', function($scope){ 
   $scope.name = 'World';
}
]);

angular.module('example').controller('DropdownCtrl', ['$scope', function($scope){ 
      $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
}
]);