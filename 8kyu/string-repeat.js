/* 
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// ! My solution

function repeatStr (n, s) {
    return s.repeat(n);
  }


// ? Other interesting solutions


// 1.
repeatStr = (n, s) => s.repeat(n)


// 2. 

function repeatStr (n, s) {
  String.prototype.repeat = function(n) {
     return (new Array(n + 1)).join(this);
  };
  return s.repeat(n);
}


