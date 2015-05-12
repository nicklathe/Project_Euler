/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

*/

// var maxVal = 0;

var fibMe = function(maxVal) {
    var sum = 0;
    var num1 = 1;
    var num2 = 2;
    var temp = 0;
    var max = maxVal;

    while(sum < max) {
        // var added = num1 + num2;
        if(num2 % 2 === 0) {
            sum += num2;
        }
        if(sum + num2 < max) {
            temp = num1 + num2;
            num1 = num2;
            num2 = temp;
        } else {
            return sum;
        }
    }
    return sum;
}

console.log(fibMe(4e+6));
