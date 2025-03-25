function myFun(a, b, c, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c)
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

    // a, one
    // b, two
    // manyMoreArgs, [three, four, five, six]

const nombres = ["Nicolas","Danna","Danilo"]

console.log(nombres)

let cantidadNombres = nombres.length
  console.log(cantidadNombres) // 3

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i])
};