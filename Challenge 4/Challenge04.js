function calcTip(billValue) {
  var tipValue = billValue <= 300 && billValue >= 50 ? billValue * 0.15 : billValue * 0.2;
  console.log(`Hoá đơn: ${billValue}`);
  console.log(`Tiền tip: ${tipValue}`);
  console.log(`Tổng cộng: ${billValue+tipValue}`);
  return tipValue;
}

console.log('Data 1: Test for bill values 270, 40 and 430');
console.log('Bill 1:');
calcTip(270); 
console.log('Bill 2:');
calcTip(40); 
console.log('Bill 3:');
calcTip(430); 