const car = {
    name :"Bmw" ,
    model : "X5",
    engine: "V8",
    color: "Black",
    horsePower: 335, 
    maxSpeed: 130 , 
    maxFuel: 80, 
    fuelConsumption: 12, 
}

function formula(){
    result = ((car.maxFuel / car.fuelConsumption ) *100)/ car.maxSpeed;
    console.log(car)
    console.log(result+ " " + "Hours Bmw X5 will go on max speed" )
}
formula ()