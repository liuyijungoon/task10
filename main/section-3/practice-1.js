'use strict';
module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    collectionA.forEach(function (item,index) {
        let key = item.key;
        let count = item.count;
        if(objectB.value.some(function (element,index) {
                return element===key;
            })){ count--;}
        result.push({ key, count });
    });
    return result;
};