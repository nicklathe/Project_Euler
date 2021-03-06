/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.

*/

var max = 1000;

var sum = 0;

var naturalNumbers = function(num) {
    if(num % 3 === 0 || num % 5 === 0) {
        return sum += num;
    }
};

for(var i = 0; i <= max; i ++) {
    naturalNumbers(i);
}

console.log(sum);

//answer 234168
