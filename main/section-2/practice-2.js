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
    return { key: array[0], count: parseInt(array[1], 10) };
}

function push(result, key, count) {
    for (var i = 0; i < count; i++) {
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

module.exports = function countSameElements(collection) {
    let expandedArray = expand(collection);
    return summarize(expandedArray);
}