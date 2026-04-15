const fibonacci = function(index) {
    index = Number(index);

    if(index < 0) return "OOPS";
    if(index === 0) return 0;
    if(index === 1 || index === 2) return 1;

    let prev = 1;
    let curr = 1;

    for(let i=2; i<index; i++){
        let next = curr + prev;
        prev = curr;
        curr = next;
    }
    
    return curr;
}

// Do not edit below this line
module.exports = fibonacci;
