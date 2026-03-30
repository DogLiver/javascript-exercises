const repeatString = function(str,num) {
    let newStr='';
    if(num < 0){
        return "ERROR";
    }

    else{
        while(num){
            newStr+=str;
            num--;
        }
    }

    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
