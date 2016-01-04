(function () {
    'use strict';
    
    angular.module('mainApp', [
        // Angular modules 

        // Custom modules 

        // 3rd Party Modules
       
    ])
.config([function () {  
        console.log("Configuration hook")
    }])

.run([function () {

    console.log("Run hook")

}])

.controller('MainCtrl', ['$scope','$http', function ($scope,$http) {

    this.getData = function () {
        var scope = this;
        $http.get('api/Students')
            .success(function (data) {
              scope.students = data;
              console.log(data);
          });
    }

    this.getData();

}])



;
})();