const reverseString = function(String) {
    let splitString = String.split("");
    let revString = splitString.reverse();
    let newString = revString.join('')
    return newString
    
};

reverseString('hello')

// Do not edit below this line
module.exports = reverseString;
