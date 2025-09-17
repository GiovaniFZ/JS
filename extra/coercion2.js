// Explicity coercion happens when we see that the conversion to another type will happen
var a = "42"
var b = Number(a)
console.log(typeof b) // Number

// Implicity coercion happens when the conversion to another type is not so obvious
var a = "42";
var b = a * 1;
console.log(typeof b) // number