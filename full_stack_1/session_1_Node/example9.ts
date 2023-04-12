

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

interface Company{
   address: string,
   tel: number 
}

interface HeavyTruck extends Car{
    cargo_capacity_t: number,
    company?: Company // Optional
}

let simpleCompany: Company = {
    address: "Cirks iela 4",
    tel: 28949423
}

let simpleTruck: HeavyTruck = {
    brand: "Mercedes",
    km: 1e2,
    isManual: false,
    cargo_capacity_t: 30,
    company: {
        address: "Zirgu iela 14",
        tel: 25616175
    }
}

let simpleTruck2: HeavyTruck = {
    brand: "Volvo",
    km: 5e2,
    isManual: true,
    cargo_capacity_t: 22,
    company: simpleCompany
}


console.log(simpleTruck, simpleTruck2);