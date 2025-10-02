function foo(num) {
    console.log("foo "+ num)
    // If I do this.count++ I will get a 0 on the console.log
    // this.count++
    // But if I do foo.count++ I will get 4.
    // That's crazy.
    foo.count++
}

foo.count = 0
var i;

for (i = 0; i < 10; i++){
    if (i > 5 ) {
        foo(i);
    }
}

console.log(foo.count)