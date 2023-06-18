
var simpleList = new Array();


simpleList.push(`first`);
simpleList.push(1);
simpleList.push(false);


console.log(simpleList);


var simpleMap = new Map();

simpleMap.set(`cart1`, 0);
simpleMap.set(`cart2`, 3);

console.log(simpleMap);

var simpleDict = {
    "cart1": 0,
    "cart2": 3
};

console.log(simpleDict);
console.log(simpleDict["cart2"]);


var simpleDate = new Date();
console.log(`Sodienas datums: `, simpleDate.getFullYear(),`.`, simpleDate.getDay(), `.`, simpleDate.getMonth());