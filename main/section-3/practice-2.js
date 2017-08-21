'use strict';
module.exports = function createUpdatedCollection(collectionA, objectB) {
    let result = [];
    collectionA.forEach(function (item) {
        let key = item.key;
            let count = item.count;
            if(objectB.value.some(function (item,index) {
                return item===key;
                })){ count = count - Math.floor(count / 3);}
           result.push({key, count});
    });
    return result;
};
