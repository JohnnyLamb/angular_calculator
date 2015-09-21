var app = angular.module('myApp', []);

app.controller('calculate', function($scope) {
var num =[];
var expression = [];

  $scope.buttonVal = function() {
    x = event.target;

    if(angular.element(x).html() === "="){
      expression.push(num.join(''));
      console.log(expression);
      var answer = calculate2(expression);
      num = [answer];
       $scope.screen = answer;
      num = [answer];
      expression =[];

    }

    else if (angular.element(x).html() === "C") {
      num = [];
      expression =[];
      $scope.screen = "";

    }

    else if (angular.element(x).html() === "x"|| angular.element(x).html() === "/"|| angular.element(x).html() === "+"|| angular.element(x).html() === "-") {
      expression.push(num.join(''));
      expression.push(angular.element(x).html());
      $scope.screen = expression;
      num = [];

    }

    else if (x.nodeName === "SPAN") {
      x = angular.element(x).html();
      num.push(x);
      console.log(num);
      $scope.screen = num;

    }
  };
});
