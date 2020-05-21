/**
 * @param {number} N
 * @return {number}
 */
let fib = function(N) {
  function fibonacci (N) {
    if (N <= 1) return N;
    return fibonacci(N - 1) + fibonacci(N - 2);
  }

  return fibonacci(N);
};

console.log(fib(14));