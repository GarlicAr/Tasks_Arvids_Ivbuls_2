var a = `1`;
var result = 0;
// ===
if(a === 1){
    result+=a;
}
if(typeof(a) === `string`){
    console.log(`string type`)
}

console.log(result);

/*
var result = 1 + '1';
console.log(result);

var result = '1' + 1;
console.log(result);
*/


function add(var1, var2){
    var result = var1 + var2;
    return result;
}

console.log(add(3,2));


var elements = [1,2];
var elements2 = [2,4];

elements = elements2;

function addElement(inp){
    inp.push(3);
}



addElement(elements);
addElement(elements); 

console.log(elements, elements2); // 2 4 3 3 