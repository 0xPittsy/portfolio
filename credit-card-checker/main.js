// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

function validateCred(arr){ //Implements the Luhn's Algorithm to validate credit card numbers.
    let buffArr = []; //Buffer array
    buffArr.unshift(arr[arr.length - 1]); //Add check digit to buffer

    let counter = 0; //Counter to determine when to double integers.
    for (let i = arr.length - 2; i >= 0; i--){
        if ((counter%2) == 0){ //Doubles every other integer as counter++
            buffArr.unshift(arr[i] * 2);
        } else buffArr.unshift(arr[i]);
        
        counter++; //Increments counter.
    }
    for (let i = 0; i < buffArr.length - 1; i++){ //Checks each new value, if it's above 9, subtracts 9.
        if (buffArr[i] > 9){
            buffArr[i] = buffArr[i] - 9;
        }
    }
    let sum = 0; //Adds total of CC numbers together
    for (let i = 0; i < buffArr.length; i++){
        sum = sum + buffArr[i];
    }
    if (sum%10 == 0){ //If sum % 10 equals 0, number is valid
        return true;
    } else return false;   //Else CC number is not valid
}

function findInvalidCards(nestedArr){ //Calls validateCard() to get an array of incorrect CC numbers
    let invalidCards = []

    for (let i = 0; i < nestedArr.length; i++){
        if (validateCred(nestedArr[i]) == false){
            invalidCards.push(nestedArr[i]);
        }
    }
    return invalidCards;
}

function idInvalidCardCompanies(nestedArr){ //Lists companies which incorrect numbers come from.
    let invalidCompanies = []

    for (let i = 0; i < nestedArr.length; i++){
        switch (nestedArr[i][0]){
            
            case 3:
                if (invalidCompanies.includes('Amex (American Express)')){
                    continue;
                } else invalidCompanies.push('Amex (American Express)');
            case 4:
                if (invalidCompanies.includes('Visa')){
                    continue;
                } else invalidCompanies.push('Visa');
            case 5:
                if (invalidCompanies.includes('Mastercard')){
                    continue;
                } else invalidCompanies.push('Mastercard');
            case 6:
                if (invalidCompanies.includes('Discover')){
                    continue;
                } else invalidCompanies.push('Discover');
            default:
                invalidCompanies.push('Company not found.')
        }
    }
    return invalidCompanies;
}
console.log(findInvalidCards(batch));
console.log(idInvalidCardCompanies(batch));