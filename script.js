function decimalToBinary(num) {
  //Write you code here
	 if (num === 0) {
    return "0"; // Special case for decimal 0
  }

  let binary = ""; // Initialize an empty string to store binary digits

  while (num > 0) {
    const remainder = num % 2; // Calculate the remainder
    binary = remainder + binary; // Add the remainder to the beginning of the binary string
    num = Math.floor(num / 2); // Update the decimal number by dividing it by 2 (integer division)
  }

  return binary;
  
}
// Test cases
console.log(decimalToBinary(7));  // Output: "111"
console.log(decimalToBinary(10)); // Output: "1010"
console.log(decimalToBinary(33)); // Output: "100001"

window.decimalToBinary = decimalToBinary;