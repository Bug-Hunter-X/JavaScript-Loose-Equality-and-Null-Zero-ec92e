function foo(a, b) {
  if (a === null || b === null) {
    return 0; //Or handle the null case appropriately
  }

  return a + b; 
}
//Alternatively, for more robust null handling:
function foo(a,b){
  a = a === null ? 0 : a; //If a is null set to 0, otherwise use the value of a
  b = b === null ? 0 : b; //If b is null set to 0, otherwise use the value of b
  return a + b;
}