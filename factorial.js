// 1 * 2 * 3 * 4 * 5
const factorial = (n) =>{
    var fact = 1;
    for(var i=1; i<=n;i++){
        fact = fact * i;
    }
    return fact;
}

const output = factorial(5);
document.write(output);