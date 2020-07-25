function fib(n) {
  // add whatever parameters you deem necessary - good luck!
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

fib(6);
