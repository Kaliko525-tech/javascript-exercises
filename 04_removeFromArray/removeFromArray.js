const removeFromArray = function(arr , ...args) {
arr = arr.filter(function(val){
    return args.indexOf(val) == -1;
 })
return arr
}
removeFromArray([1, 2, 3, 4] , 3, "nom")

// Do not edit below this line
module.exports = removeFromArray;
