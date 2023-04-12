

let cart1: number = 0;

//Shadi nevar typescript => cart1=`2`;

let shopCarts: number[] = [2,3,4];

shopCarts.push(5);

let simpleTuple: [number, number, string] = [3,4, `item`];

let simpleDict = {
    "brand": "bmw",
    "km": 2e5,
    "isManual": true
};

interface Car {
    brand: string,
    km: number,
    isManual: boolean
}


let simpleCar: Car = {
    brand: "BMW",
    km: 2e5,
    isManual: true
};

let simpleCast: Car = simpleDict;


console.log(simpleCar, simpleCast);