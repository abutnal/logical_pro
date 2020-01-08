const isPerfect = (start, end) =>{
    var count;
    for(var i=start;i<=end;i++){
        for(var j=1;j<=i/2;j++){
            if(i%j==0){
                count += j;
                
            }
        }
        if(count==i){
            console.log(i);
        }
        count = 0;
    }
}
isPerfect(1,1000);
