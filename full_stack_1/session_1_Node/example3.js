var rimiCarts1 = [5,7,8]; // array
var rimiCarts2 = [1,2,3];


/* adrese!
rimiCarts1 = rimiCarts2;

rimiCarts1.push(9);

console.log(rimiCarts1, rimiCarts2); // 1239 1239
*/

for(var i = 0; i < rimiCarts1.length; i++){
    if(i === 1){
        continue; //break 
    }
    console.log(rimiCarts1[i]);
}
// ecma 6 scripts, of takes every item

for(var item of rimiCarts2){
    console.log(item);
}

//for in -> only for dicts, maps, keys...
// key takes indexes
for(var key in rimiCarts2){
    console.log(key);
}