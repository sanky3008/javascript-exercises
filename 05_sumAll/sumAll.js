const sumAll = function(start, end) {
    let sum = 0;

    if ((typeof start != 'number')||(typeof end != 'number')){
        return 'ERROR';
    } else if (start * end < 0) {
        return 'ERROR';
    } else if (start > end){
        let temp = end;
        end = start;
        start = temp;
    }

    for (let i = start; i <= end; i++) {
        sum = sum + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
