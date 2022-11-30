/*1. Given two objects. Write a function that performs shallow compare.*/



let a = { a: 2, b: 3, u: 44 };
let b = { a: 2, b: 2 };

function shallowCompare(a, b) {
    let keys1 = [];
    let values1 = [];
    let keys2 = [];
    let values2 = [];
    let result = true;
    for (let key in a) {
        keys1.push(key);
        values1.push(a[key])
    }
    for (let key in b) {
        keys2.push(key);
        values2.push(b[key])
    }
    if (keys1.length !== keys2.length) {
        result = false;
    } else {
        for (let i = 0; i < keys1.length; i++) {
            if (keys1[i] !== keys2[i] || values1[i] !== values2[i]) {
                return false;
            } else {
                result = true;
            }
        }
    }
    return result;
}


/*2. Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern") 
is a word or phrase without a repeating letter.*/

function isAnIsogram(word) {
    let sameLetters = 0;
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < word.length; j++) {
            if (word[i] === word[j]) {
                sameLetters++
            }
        }
    }
    if (sameLetters === word.length) {
        return false
    }
    return true
}

/*3. Given a number n ( n&gt;= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)*/

function fibonacci(number) {
    let n1 = 0;
    let n2 = 1
    let num;
    let result = 0;

    for (let i = 1; i <= number; i++) {
        result = n2;
        num = n1 + n2;
        n1 = n2;
        n2 = num;

    }
    return result;
};


/*4. Insert a number. Calculate product and sum of the digits of the number. If product is
divisible by the sum, print the quotient, otherwise print the remainder. */

function fn(number) {

    let num = `${number}`;
    let sum = 0;
    let product = 1;
    let result = ``;

    if (number !== 0) {
        for (let i = 0; i < num.length; i++) {
            sum += +num[i]
            product *= +num[i]
        }

        if (product % sum === 0) {
            result = `Quotient is ${product / sum}.`;
        } else {
            result = `Remainder is ${product % sum}.`;
        }
    } else {
        result = `Cannot calculate.`;
    }
    return result;
}

/*5. Write a program to print X star pattern series. */

function printMatrix(x) {
    let result = ''
    let number = 0;
    for (let i = 0; i < x; i++) {
        let row = ''
        for (let j = 0; j < x; j++) {
            if (j === number || j === x - (number + 1)) {
                row += '*'
            } else {
                row += ' '
            }
        }
        number++
        result += row + '\n'
    }
    console.log(result)
}