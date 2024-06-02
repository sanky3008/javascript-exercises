const repeatString = function(inputString, repeatCount) {
    let outputString = "";
    if (repeatCount < 0) {
        return 'ERROR';
    }

    for(let i = 0; i < repeatCount; i++) {
        outputString = outputString + inputString;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
