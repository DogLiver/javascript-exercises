const reverseString = function(word) {
    let newWord='';
    for(i = word.length; i > 0 ; i--){
        newWord+=word[i-1];
    }
    return newWord;
};

// Do not edit below this line
module.exports = reverseString;
