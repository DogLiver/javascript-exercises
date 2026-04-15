const findTheOldest = function(array) {
    let oldest = null
    let maxAge = -Infinity;
    let currentYear = (new Date()).getFullYear();

    for(let person of array){
        const age = (person.yearOfDeath ?? currentYear) - person.yearOfBirth;

        if(age > maxAge){
            oldest = person;
            maxAge = age;
        }
    }

    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
