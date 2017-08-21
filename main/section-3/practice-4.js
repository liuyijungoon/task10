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

function split(item) {
    let array = item.split("-");
    return {key: array[0], count: parseInt(array[1], 10)};
}

function push(result, key, count) {
    for (let i = 0; i < count; i++) {
        result.push(key);
    }
}

function expand(collection) {
    let result = [];
    collection.forEach(function(item, index) {
        if (item.length === 1) {
            result.push(item);
        } else {
            let { key, count } = split(item);
            push(result, key, count);
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
    });
    return result;
}
module.exports = function createUpdatedCollection(collectionA, objectB) {
    let expandedArray = expand(collectionA);
    let summarizedArray = summarize(expandedArray);
    return discount(summarizedArray, objectB.value);
};
