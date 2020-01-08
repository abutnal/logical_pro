// Method 1: normal
const a = [1,2,4,4,5,1,2,4,0];

var b = [];
var len = a.length;
for(let i=0;i<len; i++){
    if(b.indexOf(a[i])===-1){
        b.push(a[i]);
    }
}

console.log(b);




// Method 2: good
const a = [1,2,4,4,5,1,2,4,0];

obj = {};
for(let i of a){
    obj[i] = true;
}

let b = Object.keys(obj);
console.log(b);



// Method 3: Very best method
const a = [1,2,4,4,5,1,2,4,0];
let Arr = [...new Set(a)];
console.log(Arr);