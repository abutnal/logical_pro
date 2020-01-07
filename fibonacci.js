// Fibonacci series: 0 1 1 2 3 5 8 13 21 34
const fibonacci = (n) =>{
    var f1 = 0;
    var f2 = 1;
    var f3;
    document.write(`Fibonacci series: ${f1} ${f2}`)
    for(var i=3; i<=n;i++){
        f3 = f2 + f1;
        document.write(` ${f3}`);
         f1 = f2;
         f2 = f3;
    }
   
}

const output = fibonacci(10);
