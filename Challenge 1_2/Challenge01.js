console.log("Challenge_1:")
function BMI(mass, height) {
    return mass / (height * height);
}
// Dữ liệu 1
var markMass1 = 78; // cân nặng của Mark
var markHeight1 = 1.69; // Chiều cao của Mark

var johnMass1 = 92; // cân nặng của John
var johnHeight1 = 1.95; //Chiều cao của John

var markBMI1 = BMI(markMass1, markHeight1);
var johnBMI1 = BMI(johnMass1, johnHeight1);

var markHigherBMI1 = markBMI1 > johnBMI1;

// Dữ liệu 2
var markMass2 = 95; // cân nặng của Mark
var markHeight2 = 1.88; // Chiều cao của Mark

var johnMass2 = 85; // cân nặng của John
var johnHeight2 = 1.76; // Chiều cao của John

var markBMI2 = BMI(markMass2, markHeight2);
var johnBMI2 = BMI(johnMass2, johnHeight2);

var markHigherBMI2 = markBMI2 > johnBMI2;

console.log("*****Dữ liệu 1*****");
console.log("Chỉ số BMI của Mark: " + markBMI1);
console.log("Chỉ số BMI của John: " + johnBMI1);
console.log("BMI của Mark cao hơn John? " + markHigherBMI1);

console.log("*****Dữ liệu 2*****");
console.log("Chỉ số BMI của Mark: " + markBMI2);
console.log("Chỉ số BMI của John: " + johnBMI2);
console.log("BMI của Mark cao hơn John? " + markHigherBMI2);