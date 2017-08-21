'use strict';
module.exports = function collectSameElements(collectionA, objectB) {
    let result = [];
    collectionA.forEach(function(item, index) {
        if (objectB.value.some(function(value, index) { return value === item.key }))
            result.push(item.key);
    })
    return result;
}