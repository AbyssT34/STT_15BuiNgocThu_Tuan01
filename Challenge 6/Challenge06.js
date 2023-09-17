// 1. Create a function called 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to)
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  }
console.log("With a bill value of 100, the tip is " + calcTip(100));
// 2. And now let's use arrays! So create an array 'bills' containing the test data below
const bills = [125, 555, 44];
// 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
const tips = bills.map(calcTip);
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
const totals = bills.map((item, index) => item + tips[index]);
console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);