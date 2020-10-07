class BMI {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    calculateBMI() {

        let bmi = this.weight / (this.height ** 2);
        return bmi;
//outputs bmi to the console

    }

}
//inputs the values into the variables
let MyBmi = new BMI(2, 68);
let calculatedBMI = MyBmi.calculateBMI();
console.log(calculatedBMI);
