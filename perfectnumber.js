function is_perfect(start, end)
{
    var total = 0;
     
  for(var i = start; i<=end; i++)
    {
        for( var j=1; j<=i/2; j++)
        {
            if (!(i%j))
            {
                total+=j;
            }
        }
        if (i==total)
        {
            console.log(i);
        }
        //it works
        total=0;
    }
 } 
is_perfect(1, 100);