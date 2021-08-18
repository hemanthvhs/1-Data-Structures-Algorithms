// Count the total number of unique values
// [1,2,3,1] Output = 3

function countUniqueValues(ip) {
    if (ip.length === 0) {
        return 0;
    }

    const uniqueValArr = [];

    for (let val of ip) {
        if (!uniqueValArr.includes(val)) {
            uniqueValArr.push(val);
        }
    }

    return uniqueValArr.length;
}

const result = countUniqueValues([1, 2, 3]);
console.log(result);
