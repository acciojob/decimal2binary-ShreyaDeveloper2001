function decimalToBinary(num) {
  //Write you code here
  if (decimalNumber === 0) {
    return '0';
  }

  let binary = '';
  while (decimalNumber > 0) {
    const remainder = decimalNumber % 2;
    binary = remainder + binary;
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binary;
}

// Example usage:
const decimalNumber1 = 7;
const decimalNumber2 = 10;
const decimalNumber3 = 33;

console.log(`Decimal ${decimalNumber1} to Binary: ${decimalToBinary(decimalNumber1)}`);
console.log(`Decimal ${decimalNumber2} to Binary: ${decimalToBinary(decimalNumber2)}`);
console.log(`Decimal ${decimalNumber3} to Binary: ${decimalToBinary(decimalNumber3)}`);

  
}

window.decimalToBinary = decimalToBinary;
