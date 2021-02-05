// Anonymous function
(function (a, b, c) {
    let x = 3
    console.log(`Result: ${a, b, c}`)
    console.log(x)
})(1, 2, 3);

(function (a, b, c) {
    let x = 300 // não vai mudar nada no x de cima, pois estamos em outro scopo
    console.log(`Result: ${a, b, c}`)
    console.log(x)
})(1, 2, 3);

//arrow
(() => {
    console.log('arrow #01')
})();