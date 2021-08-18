// Input & Output should have the same frequency
// 123 , 231 - TRUE
// 123 , 122 - FALSE

function checkFrequency(str1, str2) {
    // Edge Case - Both strings should be of same length
    if (str1.length !== str2.length) {
        return false;
    }

    //Edge Case - Convert inputs to strings incase is they are not
    str1 = typeof str1 === "number" ? str1.toString() : str1;
    str2 = typeof str2 === "number" ? str2.toString() : str2;

    //  Loop through each string & mark their frequencies in Obj.
    let str1Freq = getFrequency(str1);
    let str2Freq = getFrequency(str2);

    // Then loop through that str1 freq object & check if the key has got same frequency in other string
    for (let key in str1Freq) {
        if (str1Freq[key] !== str2Freq[key]) {
            return false;
        }
    }
    return true;
}

function getFrequency(str) {
    const freq = {};
    for (let val of str) {
        freq[val] = (freq[val] || 0) + 1;
    }
    return freq;
}

const result = checkFrequency(123, 232);
console.log(result);
