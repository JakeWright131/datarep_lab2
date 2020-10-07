class Vehicle{

    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
//Reads out the information inputted to the consike
    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }

}


//adds another variable to the vehicle output
class Cars extends Vehicle {
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }

    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}
//inserts the information into the variables
let myCar = new Cars('VW', 'Up!', 2016, 5);
myCar.Information();
