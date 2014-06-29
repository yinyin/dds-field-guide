(function(){
		
   var app = angular.module('splashPage', []);

   
   app.directive('mailchimp', function() {
      return {
	     restrict: 'E',
		 templateUrl: 'app/mailchimp.html'
	  };
   });

   // Main controller to load the data for the homepage
   app.controller('SplashController', ['$http', function($http) {
	  var contents = this;
	  contents.splashdata = {};
	  $http.get("app/index.js").success(function(data) {
		contents.splashdata = data;
	  });
   }]);
	
})();