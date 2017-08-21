'use strict';
module.exports = function collectSameElements(collectionA, collectionB) {
    let result = [];
    collectionA.forEach(function(item, index) {
        if (collectionB.some(function(value, index) { return value === item }))
            result.push(item);
    })
    return result;
}