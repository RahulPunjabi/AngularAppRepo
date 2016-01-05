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

    this.showCreateAlert = false;

    this.loadGrid = function () {
        var scope = this;
        $http.get('api/Students')
            .success(function (data) {
              scope.students = data;
              console.log(data);
          });
    }

    this.createStudent = function (student) {
        console.log("here");
        var scope = this;
        $http.post('api/Students', student)
        .success(function () {
            console.log("Created");
            scope.loadGrid();
            scope.showCreateAlert = true;
        })
    }

}])



;
})();