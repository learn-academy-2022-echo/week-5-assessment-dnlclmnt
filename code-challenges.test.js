// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.


describe('codedMsg', () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    it("takes in a string and returns a coded message. The coded message converts 'a' to 4 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
        expect(codedMsg(secretCodeWord1)).toEqual('L4ck4d41s1c4l')
        expect(codedMsg(secretCodeWord2)).toEqual('G0bbl3dyg00k')
        expect(codedMsg(secretCodeWord3)).toEqual('3cc3ntr1c')
    })
})
///////////////RED FAIL MESSAGE

// FAIL  ./jest.test.js
// codedMsg
//   ✕ takes in a string and returns a coded message. The coded message converts 'a' to 4 'e' to 3, 'i' to 1, and 'o' to 0. (1 ms)

// ● codedMsg › takes in a string and returns a coded message. The coded message converts 'a' to 4 'e' to 3, 'i' to 1, and 'o' to 0.

//   ReferenceError: codedMsg is not defined


// b) Create the function that makes the test pass.

// Create function that takes in a string.
// create a new empty string to be returned
    // Iterate over string parameter, using conditional statements to check the value of the string at specific index (checking each letter). Use .toLowerCase() method on each letter to test for edge cases of capital letters.
        // if string at index's value === 'a', concatenate new string value at index with '4'
        // if string at index's value === 'e', concatenate new string value at index with '3'
        // if string at index's value === 'i', concatenate new string value at index with '1'
        // if string at index's value === 'o', concatenate new string value at index with '0'
        // else concatenate new string with string parameter at specific index

    // This allows us to iterate over the string argument we pass in to our function. We will then assess with our conditionals if certain letter is the letter we're looking for. If it is, then we will add a different value to our new string depending on our conditionals.
    // Otherwise, we will add the letter from the string parameter to our new string, unchanged.

// return our new string

const codedMsg = (str) => {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if(str[i].toLowerCase() === 'a') {
            newStr += '4'
        }
        else if (str[i].toLowerCase() === 'e') {
            newStr += '3'
        }
        else if (str[i].toLowerCase() === 'i') {
            newStr += '1'
        }
        else if (str[i].toLowerCase() === 'o') {
            newStr += '0'
        }
        else {
            newStr += str[i]
        }
    }
    return newStr
}



////////////// GREEN PASS MESSAGE

// PASS  ./jest.test.js
// codedMsg
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4 'e' to 3, 'i' to 1, and 'o' to 0. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.


describe('certainLetter', () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    
    const letterA = "a"
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    it('takes in an array of words and a single letter. Returns an array of all the words containing that particular letter', () => {
        expect(certainLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(certainLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

/////////////////// RED FAIL MESSAGE

// FAIL  ./jest.test.js
// codedMsg
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4 'e' to 3, 'i' to 1, and 'o' to 0. (2 ms)
// certainLetter
//   ✕ takes in an array of words and a single letter. Returns an array of all the words containing that particular letter

// ● certainLetter › takes in an array of words and a single letter. Returns an array of all the words containing that particular letter

//   ReferenceError: certainLetter is not defined

// b) Create the function that makes the test pass.

// Create a function that will take two arguments - an array of words and a single letter string. 
// Create an empty result array we can push each word into
// Iterate over length of array argument (iterating over each word)
    // Iterate over each letter in word
        // If letter is equal to our string argument 
        // (Test for edge cases of capitalized letters by calling on the .toLowerCase() method on the letter we're comparing 
        // as well as (logical AND operator) making sure that the word is not already in our result array (use indexOf method to check that the word we are iterating over isn't already in our result array)) 
        // then...
            // push word into result array
// return result array

// In our function, arr[i] is representative of the current word in the array
    // We are using a nested for loop to also iterate over each word to compare each letter in the word (represented as arr[i][j]) with the letter parameter we are passing into our function

const certainLetter = (arr, letter) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j].toLowerCase() === letter && result.indexOf(arr[i]) === -1) {
                result.push(arr[i])
            }
        }
    }
    return result
}

//////////////////// GREEN PASS MESSAGE

// PASS  ./jest.test.js
// codedMsg
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4 'e' to 3, 'i' to 1, and 'o' to 0. (3 ms)
// certainLetter
//   ✓ takes in an array of words and a single letter. Returns an array of all the words containing that particular letter (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.


describe('fullHouse', () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true
    it('takes an array of 5 numbers and determines where or not the array is a full house. A full house is exactly one pair and one three of a kind', () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})

//////////////// RED FAIL MESSAGE

// FAIL  ./jest.test.js
// codedMsg
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4 'e' to 3, 'i' to 1, and 'o' to 0. (2 ms)
// certainLetter
//   ✓ takes in an array of words and a single letter. Returns an array of all the words containing that particular letter
// fullHouse
//   ✕ takes an array of 5 numbers and determines where or not the array is a full house. A full house is exactly one pair and one three of a kind

// ● fullHouse › takes an array of 5 numbers and determines where or not the array is a full house. A full house is exactly one pair and one three of a kind

//   ReferenceError: fullHouse is not defined


// b) Create the function that makes the test pass.

// Create a function that takes in an array of 5 numbers
// Due to our array being an array of numbers, we can use the sort method to make our iteration easier
// Create a new variable (sortedHand) and assign it to the array parameter, calling the sort method on it. 
// Iterate over the sorted array with a for loop, setting i variable to 0.
    // if the current value is equal to the value before it AND the current value is equal to the value in front of it, we know we have three of a kind
        // We can store this value by assigning it the value of the sorted array at the current index (sortedHand[i]). We will use this to compare later
        // If we find three of a kind, we can iterate back over the loop to find our pair, iterating back at the start of our hand
        // Start another FOR loop, creating a j variable, also initialized to 0 and iterating over the sortedHand array again.
            // IF the value at the current index is equal to the value at the next index AND the current value is NOT the value of our three-of-a-kind, we can return true.
    // we will default to a return value of false if our IF loops don't execute and return true


const fullHouse = (arr) => {
    let sortedHand = arr.sort()
    console.log(sortedHand)

    for (let i = 0; i < sortedHand.length; i++) {
        if (sortedHand[i] === sortedHand[i - 1] && sortedHand[i] === sortedHand[i + 1]) {
            let threePair = sortedHand[i]
            for (let j = 0; j < sortedHand.length; j++) {
                if (sortedHand[j] === sortedHand[j + 1] && sortedHand[j] !== threePair) {
                    return true;
                }  
            }
        }
    }
    return false
}

/////// Another way of solving the problem using an object
// I created a separate empty object variable called hand
// I then called the forEach method on the passed in array to iterate over the array.
// If object with the current element of the value we're on (hand[el]) has no value, it will be assigned to 1, else it will be incremented by 1
// we will then create an array of only the values of our hand object by using the Object.values method on our hand object and assigning it to a variable. This will give us an array we can iterate over to check for the values of 2 (a pair) and 3 (three-of-a-kind). We can also chain it with the sort method so we can easily check for the first value being 2 and the next value after is 3.
// if current value in our hand array is equal to 2 and the next value in our hand array is 3, we will return true
// else return false


// const fullHouse = (arr) => {
//     let hand = {}

//     arr.forEach((el) => {
//         hand[el] = hand[el] + 1 || 1
//     })
//     const handArr = Object.values(hand).sort()
//     for (let i = 0; i < handArr.length; i++) {
//         if (handArr[i] === 2 && handArr[i + 1] === 3) {
//             return true
//         } else {
//             return false
//         }
//     }
// }

/////////////// GREEN PASS MESSAGE

// PASS  ./jest.test.js
// codedMsg
//   ✓ takes in a string and returns a coded message. The coded message converts 'a' to 4 'e' to 3, 'i' to 1, and 'o' to 0. (2 ms)
// certainLetter
//   ✓ takes in an array of words and a single letter. Returns an array of all the words containing that particular letter (1 ms)
// fullHouse
//   ✓ takes an array of 5 numbers and determines where or not the array is a full house. A full house is exactly one pair and one three of a kind (25 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.475 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.43s.

