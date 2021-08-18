// Wite a function sumZero, which accepts array if integers & retun the first pair where sum is 0
// Arrays in sorted oder
// [-3,-2,1,0,2,3,4] - [-3,3]
// [-2,0,1,5] - undefined

function sumZero(ip) {
    // Edge Case - If lenfth <= 2
    if (ip.length <= 2) {
        return undefined;
    }

    let left = 0;
    let right = ip.length - 1;

    // Loop till left != right & for each loop check the sum
    // If the sum is positive implies that right side index value is greater hence we substract -1
    // If the sum is negative implies that left side index value is greater hence we add +1 to index
    while (left !== right) {
        const sum = ip[left] + ip[right];

        if (sum === 0) {
            return [ip[left], ip[right]];
        } else if (sum > 1) {
            right -= 1;
        } else {
            left += 1;
        }
    }
}

const result = sumZero([-3, -2, 1, 0, 2, 3]);
console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////

/* function sumZero(ip) {
    if (ip.length < 2) {
        return undefined;
    }

    for (let i = 0; i < ip.length; i++) {
        for (let j = i + 1; j < ip.length; j++) {
            const sum = ip[i] + ip[j];
            if (sum === 0) {
                return [ip[i], ip[j]];
            }
        }
    }

    return undefined;
}

const result = sumZero([-3, -2, 1, 0, 2]);
console.log(result); */
