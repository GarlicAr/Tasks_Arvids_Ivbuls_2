enum FuelType {
    Gasoline = "Gasoline",
    Diesel= "Diesel",
    LPG="LPG",
    Electric= "Electric"
}

interface Car{
    fuel: FuelType
}

let car: Car = {
    fuel: FuelType.Diesel
}


console.log(car);