$(document).ready(function() {
    var result = $("#result");
  
    function appendToResult(value) {
      result.val(result.val() + value);
    }
  
    $(".btn").on("click", function() {
      var operator = $(this).data("operator");
      if (operator) {
        appendToResult(operator);
      } else {
        var value = $(this).text();
        appendToResult(value);
      }
    });
  
    $("#calculate").on("click", function() {
        var expression = result.val();
        var operators = /[+\-*/]/g;
        var numbers = expression.split(operators);
    
        if (numbers.length !== 2) {
            result.val("Invalid expression");
            return;
        }
    
        var operator = expression.match(operators)[0];
        var num1 = parseFloat(numbers[0]);
        var num2 = parseFloat(numbers[1]);
        var answer;
    
        switch (operator) {
            case "+":
                answer = num1 + num2;
                break;
            case "-":
                answer = num1 - num2;
                break;
            case "*":
                answer = num1 * num2;
                break;
            case "/":
                if (num2 === 0) {
                    result.val("Divide by zero error");
                    return;
                }
                answer = num1 / num2;
                break;
            default:
                result.val("Invalid operator");
                return;
        }
    
        result.val(answer);
    });    
  
    $(".btn-clear").on("click", function() {
        result.val("");
    });
  
    $(".btn-ln").on("click", function() {
        var value = parseFloat(result.val());
        var resultValue = Math.log(value);
        result.val(resultValue);
    });
  
    $(".btn-square").on("click", function() {
        var value = parseFloat(result.val());
        var resultValue = value * value;
        result.val(resultValue);
    });
  
    $(".btn-cube").on("click", function() {
        var value = parseFloat(result.val());
        var resultValue = value * value * value;
        result.val(resultValue);
    });
  });
  