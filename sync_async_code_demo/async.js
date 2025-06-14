const fs = require('fs');
const https = require('https')

console.log('hellow world');

var a = 109876
var b = 98767


https.get('https://dummyjson.com/products/1',
    (res)=>{
        console.log('fetched successfully');
        
    }
)

setTimeout(()=>{
    console.log('set timeout after 5 seconds');
    
},5000)

fs.readFile('./file.txt','utf8',(err,data)=>{
    console.log('file data',data);
    
})

function multiply(a,b){
    return a*b;
}

var ans = console.log(multiply(a,b));;
