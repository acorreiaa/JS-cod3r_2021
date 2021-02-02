//Function Declaration
function sayHello() {
    console.log('Hello')
}

sayHello()//invocando a função

//Function Arguments
function sayHelloTo(name) {
    console.log(`Hello ${name}!`)
}

sayHelloTo('Mike') // Hello Mike!

//Function Return
function returnHi() {
    return 'Hi!'
}
const greeting = returnHi()
console.log(greeting) //Hi!
console.log(returnHi()) //Hi!


function returnHiTo(name) {
    return `Hi ${name}!`
}
console.log(returnHiTo('Jonh'))//Hi Jonh!