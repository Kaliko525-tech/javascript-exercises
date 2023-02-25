const sumAll = function(min , max) {
    //if(!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR'; -> test if not a number
    //if (min < 0 || max < 0) return 'ERROR'; -> test for negative numbers
    //if(min > max){ -> switch rolls
    //    const temp = min;
    //    min = max ;
    //    max = temp ;
    //}
    //let sum = 0;
    //for (let i = min; i < max + 1; i++){
    //    sum += i;
    //}
    //return sum
    // solution -> but my way works too just top is way less work.
    
    let sum = 0;
    if (min > max){
        for (let i = max; i<=min; i ++){
            sum += i
        }
    }else if (Math.sign(min || max) === -1 ){
        sum = 'ERROR'
    }else if ( typeof min === 'string' || typeof max === 'string'){
        sum ='ERROR'
    }else if ( typeof min === 'object' || typeof max === 'object'){
        sum ='ERROR'
    }
    
    else {
        for (let i = min; i <= max; i++){
            sum+=i
        }
    }
    return sum;


}
sumAll(1,4)

// Do not edit below this line
module.exports = sumAll;
