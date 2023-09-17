// 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
// 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `BMI của ${mark.fullName} (${mark.bmi.toFixed(1)}) cao hơn ${john.fullName}: (${john.bmi.toFixed(1)}))!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `BMI của ${john.fullName} (${john.bmi.toFixed(1)}) cao hơn ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`
  );
}
