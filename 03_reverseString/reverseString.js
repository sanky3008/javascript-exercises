const reverseString = function(inputString) {
    let outputString = ""
    for (let i = inputString.length - 1; i >= 0; i--) {
        outputString = outputString + inputString[i];
        console.log(outputString);
    }
    // console.log(outputString);
    return outputString;
};

// Do not edit below this line
module.exports = reverseString;
