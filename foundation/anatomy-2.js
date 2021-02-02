//Anonymous function (função anonima)
//aquela função que não tem nome
(function (a, b, c) {
    return a + b + c
})
 
//Function Expression
const sum = function (a, b) {
    return a + b
}
 
const result = sum(7, 54)
console.log(result)
//sum(7, 54)
//console.log(sum(7, 54))
 
const anotherSum = sum
console.log(sum(4, 9))
 
let x = 3
console.log(x)
 
x = sum
console.log(x(11, 13))