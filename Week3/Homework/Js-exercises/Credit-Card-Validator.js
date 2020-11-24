function validateCreditNumber(cardNumber) {
    if (cardNumber.length > 16) {
         console.log("Invalid! The input " + cardNumber + " is more than 16 characters");
        }
     
        else if (cardNumber.length < 16) {
         console.log("Invalid! The input " + cardNumber + " is less than 16 characters");
        }
     
        if (isNaN(cardNumber)) {
           console.log("Invalid! The input " + cardNumber + " should contain only numbers");
        }
     
        else {
           const arrayOfcardNumber = Array.from(cardNumber, Number);
           const lastNumber = arrayOfcardNumber[arrayOfcardNumber.length -1];
           var countDifferentNumber = 0;
           for (var i=1 ; i < arrayOfcardNumber.length; i++) {
              if (arrayOfcardNumber[i] == arrayOfcardNumber[0]) {
                 countDifferentNumber = countDifferentNumber + 1; 
              }
           }
           if (countDifferentNumber == 15) {
              console.log("Invalid! The input " + cardNumber + " should contain at least two different numbers")
           }
           if (lastNumber % 2 != 0) {
              console.log("Invalid! The last number of " + cardNumber + " is not even");
           }
           const reducer = (accumulator, currentValue) => accumulator + currentValue;
     
           if (arrayOfcardNumber.reduce(reducer) < 16 ) {
              console.log("Invaild! The sum of input " + cardNumber + " should be greater that 16");
     
           }
           else {
               console.log("Success! The input " + cardNumber + " is a valid credit card number!");
           }
        }
           }
        
     
     validateCreditNumber('a92332119c011112');
     validateCreditNumber('4444444444444444');
     validateCreditNumber('6666666666661666');
