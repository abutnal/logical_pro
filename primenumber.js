const isPrime = (start, end)=>{
for (var i = start; i <= end; i++) {
    var notPrime = false;
    for (var j = 2; j <= i; j++) {
        if (i%j===0 && j!==i) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(i);
    }
}
}

isPrime(1,100)
