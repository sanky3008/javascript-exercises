const palindromes = function (word) {
    word = word.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/, '');

    for (i = 0; i < word.length; i++){
        if (i == word.length - i - 1){
            break;
        }
        else if (!(word[i].toLowerCase() == word[word.length - i - 1].toLowerCase())){
            return false;
        }
    }

    return true;
};

// palindromes('racecar');

// Do not edit below this line
module.exports = palindromes;
