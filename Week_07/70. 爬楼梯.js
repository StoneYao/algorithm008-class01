/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 2) {
        return n;
    }

    let result = 0;
    let hashMap = new Map([[1, 1], [2, 2]]);

    for (let i = 3; i < n + 1; i++) {
        let penultimate = hashMap.get(i - 2)
        let last = hashMap.get(i - 1)

        hashMap.set(i, penultimate + last)
    }

    return hashMap.get(n)
};