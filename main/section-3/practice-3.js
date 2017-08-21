'use strict';
function summarize(collection) {
    let result = [];
    collection.forEach(function(element) {
        let obj = result.filter(function(x, index) {
            if (x.key === element) {
                return element;
            }
        });
        if (obj[0]) {
            obj[0].count++;
        } else {
            result.push({ key: element, count: 1 });
        }
    });
    return result;
}


function discount(collection, promotionItems) {
    let result = [];
    collection.forEach(function (item) {
        let key = item.key;
        let count = item.count;
        if(promotionItems.some(function (item) {
                return item === key;
            })){
            count = count - Math.floor(count / 3);
        }
        result.push({key, count});
    })
    return result;
}

module.exports = function createUpdatedCollection(collectionA, objectB) {
    let summarized = summarize(collectionA);
    return discount(summarized, objectB.value);
}
