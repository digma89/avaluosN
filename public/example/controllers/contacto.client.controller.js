angular.module('example').controller('contactoController', ['$scope', '$http',
 function ($scope, $http) {
	    $scope.result = 'hidden'
	    $scope.resultMessage;
	    $scope.formData; //formData is an object holding the name, email, subject, and message
	    $scope.submitButtonDisabled = false;
	    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted     
  
  
  
	    $scope.submit = function(contactform) {       
       
	        if (contactform.$valid) {                
                 var body =  $scope.formData;                       
                 $http.post('/contacto', body).success(function( body, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    $scope.result='bg-success';
                    $scope.resultMessage = '¡Mensaje enviado exitosamente!';          
                }).error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.;
                    $scope.result='bg-danger';
                    $scope.resultMessage = '¡Ocurrió un error!';
             });
            
	        $scope.submitted = true;
	        $scope.submitButtonDisabled = true;
            
            
	        } else {
	            $scope.submitButtonDisabled = false;
	            $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
	            $scope.result='bg-danger';
	        }
	    }
	}
]);