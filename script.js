function isSameType(value1, value2) {
  //your js code here
	// Check if both values are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  
  // Check if both values are of the same type
  return typeof value1 === typeof value2;
}
// Test cases
console.log(isSameType(42, 'hello')); // false
console.log(isSameType(42, 100)); // true
console.log(isSameType(NaN, NaN)); // true
console.log(isSameType(NaN, 42)); // false
console.log(isSameType('hello', 'world')); // true
console.log(isSameType({}, [])); // false
console.log(isSameType(true, false)); // true
// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
