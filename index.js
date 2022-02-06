


module.exports = function ArrayDeepFlatten (array){
    var result = [];  
    array.forEach(function (elem) {
        if (Array.isArray(elem)) {
            result = result.concat(deepFlatten(elem));  
        } else {
            result.push(elem);
        }
    });
    return result;
};