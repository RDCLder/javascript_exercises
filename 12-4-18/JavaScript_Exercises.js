// Javascript Exercises

// --------------------------------------------------------------------------------------------

// Madlib

function madlib (name, subject) {
    return name + "'s favorite subject in school is " + subject;
}

// console.log(madlib("Ray", "Chemistry"));

// --------------------------------------------------------------------------------------------

// Tip Calculator

function tipAmount (bill, service) {
    if (service == "good") {
        return bill * 0.2;
    }
    else if (service == "fair") {
        return bill * 0.15;
    }
    else if (service == "bad") {
        return bill * 0.1;
    }
    else {
        return "Invalid argument(s).  Please enter a valid bill amount/level of service.";
    }
}

// console.log(tipAmount(20, "bad"));

// --------------------------------------------------------------------------------------------

// Tip Calculator 2

function totalAmount (bill, service) {
    if (service == "good") {
        return bill * 1.2;
    }
    else if (service == "fair") {
        return bill * 1.15;
    }
    else if (service == "bad") {
        return bill * 1.1;
    }
    else {
        return "Invalid argument(s).  Please enter a valid bill amount/level of service.";
    }
}

// console.log(totalAmount(20, "bad"));

// --------------------------------------------------------------------------------------------

// Print Numbers

function printNumbersWhile (start, end) {
    var i = start;
    while (i < end + 1) {
        console.log(i);
        i += 1;
    }
}

function printNumbersFor (start, end) {
    for (var i = start; i < end + 1; i ++) {
        console.log(i);
    }
}

// printNumbersWhile(1, 10);
// printNumbersFor(1, 10);

// --------------------------------------------------------------------------------------------

// Print a Square

function printSquare (size) {
    for (var i = 0; i < size; i ++) {
        console.log("*".repeat(size));
    }
}

// printSquare(5);

// --------------------------------------------------------------------------------------------

// Print a Box

// Note:  Only works for boxes with dimensions 3 x 3 or greater.

function printBox (width, height) {
    if (width > 3 && height > 3) {
        console.log("*".repeat(width));

        for (var i = 0; i < height - 2; i ++) {
            console.log("*" + " ".repeat(width - 2) + "*");
        }

        console.log("*".repeat(width));
    }
    else {
        return "Invalid dimensions.  Please enter valid dimension sizes.";
    }
}

// printBox(8, 7);

// --------------------------------------------------------------------------------------------

// Print a Banner

function printBanner (text) {
    
    console.log("*".repeat(text.length + 4));
    console.log("* " + text + " *");
    console.log("*".repeat(text.length + 4));

}

// printBanner("Welcome to DigitalCrafts")

// --------------------------------------------------------------------------------------------

// Leetspeak

function leetspeak (string) {

    var leetstring = string.replace(/a/gi, "4"
        ).replace(/e/gi, "3"
        ).replace(/g/gi, "6"
        ).replace(/i/gi, "1"
        ).replace(/o/gi, "0"
        ).replace(/s/gi, "5"
        ).replace(/t/gi, "7");

    return leetstring;

}

// console.log(leetspeak("I am a leet hacker god!"));

// --------------------------------------------------------------------------------------------

// Long-long Vowels

function longLongVowels (string, howLong) {
    var longString = string.replace(/a/gi, "a".repeat(howLong)
        ).replace(/e/gi, "e".repeat(howLong)
        ).replace(/i/gi, "i".repeat(howLong)
        ).replace(/o/gi, "o".repeat(howLong)
        ).replace(/u/gi, "u".repeat(howLong)
        ).replace(/y/gi, "y".repeat(howLong));
    
    return longString;
}

// console.log(longLongVowels("This is going to be a long day", 10));

// --------------------------------------------------------------------------------------------

// Just the Positives

function positiveNumbers (array) {
    
    positiveArray = [];
    
    for (var i = 0; i < array.length; i ++) {
        if (array[i] > 0) {
            positiveArray.push(array[i]);
        }
    }

    return positiveArray;
}

// console.log(positiveNumbers([-1, 1, -2, 2, -3, 3, -5]))

// --------------------------------------------------------------------------------------------

// Bonus: Caeser Cipher

// function caeserCipher (message, shift) {

//     message = message.toLowerCase();
//     var alphabet = "abcdefghijklmnopqrstuvwxyz";
//     var result = "";



//     return
// }

function caeserCipher (message, shift) {
    
    message = message.toLowerCase();
    var array = message.split(" ");
    var resultArray = [];

    for (var word = 0; word < array.length; word ++) {
        
        var letterResult = "";
        var charcode = 0;
        
        for (var letter = 0; letter < array[word].length; letter ++) {
            charcode = (array[word][letter].charCodeAt()) + shift;
            letterResult += String.fromCharCode(charcode);
        }
        
        resultArray.push(letterResult);
    }

    return resultArray.join(" ");
}

console.log(caeserCipher("You must unlearn what you have learned", 12));

// --------------------------------------------------------------------------------------------

// Bonus: Caeser Cipher 2