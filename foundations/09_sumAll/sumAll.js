const sumAll = function(a, b) {
    let sum = 0;
    if(a>0 && Number.isInteger(a) && b>0 && Number.isInteger(b)){
        if(a > b){
            [a,b] = [b,a];
        }
        for(let i=a; i<=b; i++){
            sum+=i; 
        }
        return sum;
    }
    else{
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
