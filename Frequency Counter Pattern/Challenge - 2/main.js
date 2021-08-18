// You have given ip & op check if inputs square is there in output
// input = [1,2,1] output = [1,4,1] True
// input = [1,2,1] output = [4,1,4] False

function checkSquare(ip, op) {
    if (ip.length !== op.length) {
        return false;
    }

    const ipFreq = {};
    const opFreq = {};

    for (let val of ip) {
        ipFreq[val] = (ipFreq[val] || 0) + 1;
    }

    for (let val of op) {
        opFreq[val] = (opFreq[val] || 0) + 1;
    }

    //{1:2, 2:1 } {1:2, 4:1}

    for (let key in ipFreq) {
        if (ipFreq[key] !== opFreq[key ** 2]) {
            return false;
        }
    }

    return true;
}

const result = checkSquare([1], [1]);
console.log(result);
