'use strict';
module.exports = function countSameElements(collection) {
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