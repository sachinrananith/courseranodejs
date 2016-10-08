(function () {
'use strict';

//  angular.module('NameCalculator', [])
//  .controller('NameCalculatorController',function ($scope) {
//    $scope.name="";
//    $scope.totalvalue=0;
//    $scope.displayNumeric=function(){
//      var totalNameValue=0;
//    totalNameValue= calculateNumericForString($scope.name);
//      $scope.totalvalue=totalNameValue;
//    }
//    });
//    function calculateNumericForString(string){
//      var totalStringValue=0;
//      for(var i=0;i<string.length;i++){
//        totalStringValue+= string.charCodeAt(i);
//      }
//      return totalStringValue;
//    }

angular.module('DIApp',[])
.controller('DIController',DIController);

function DIController ($scope,$filter){
  $scope.name="Yakkov";
  $scope.upper=function(){
    var upCase =$filter('uppercase');
    $scope.name=upCase($scope.name);
  };
  function AnnotateMe
}


})();
