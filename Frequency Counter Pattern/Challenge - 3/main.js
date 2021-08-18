// Anagram - 1
// input = "abcda" output = "dcbaa" true
// input = "abcd" output = "dcb" false
// input = "abcd" output = "zabc" false

function anagram(ip, op) {
    // Edge Case - Check if their lengths are same
    if (ip.length !== op.length) {
        return false;
    }

    const ipFreq = {};

    // Frequency counter for the input object
    for (let val of ip) {
        ipFreq[val] = (ipFreq[val] || 0) + 1;
    }

    // For each value of op, check if the key is available in ipFreq
    // If available substract 1 from that key value.
    for (let key of op) {
        if (!ipFreq[key]) {
            return false;
        } else {
            ipFreq[key] = ipFreq[key] - 1;
        }
    }

    return true;
}

const result = anagram("abcd", "cabd");
console.log(result);
