const removeFromArray = function(arr, ...theNums) {
    let result = arr;
    for(num of theNums){
        if(arr.includes(num)){
           result = result.filter((word) => word !== num);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
