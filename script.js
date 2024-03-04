function convertToRoman(num) {
  	// const obj = {
   //    0:['M',1000], 
   //    1:['D', 500], 
   //    2:['C', 100], 
   //    3:['L', 50], 
   //    4:['X', 10], 
   //    5:['V', 5], 
   //    6:['I', 1]
   //  };

  //SGN your code here
	 // Define arrays to store Roman numeral symbols and their corresponding values
   let roman_numerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
   let numeral_values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    // Initialize an empty string to store the Roman numeral representation
    roman_numeral = "";

    // Iterate through the numeral_values array
    for (let i= 0; i<numeral_values.length; i++) {
        // Repeat while num is greater than or equal to the current numeral value
        while (num >= numeral_values[i]) {
            // Concatenate the corresponding Roman numeral to the result string
            roman_numeral = roman_numeral + roman_numerals[i];
            // Subtract the numeral value from num
            num = num - numeral_values[i];
        }
    }

    // Return the Roman numeral representation
    return roman_numeral;





	



	
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
