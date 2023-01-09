"use strict";
const arry = [4, 5, 4, 5, 45, 2, 4, 245, 2, 4, 2, 1, 51, 54, 215, 1];
const filteredItem = arry.filter((item, index, arry) => {
    return item % 2 === 0;
});
console.log(filteredItem);
