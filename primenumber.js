const primeList = (start, end) => {
  
for (var i=start; i<=end; i++) {
    
    if((i%2===0)  || (i%3===0)){
        return false;
    }
    else{
       document.writeln(i+" "); 
    }
  }
}

const output = primeList(1,200);


