let result;

function add(a,b){
    return a+b;
}


for(let i=0; i<1000; i++) {

 result = add(i,i+1);
}
console.log("After 1000 calls", result);
