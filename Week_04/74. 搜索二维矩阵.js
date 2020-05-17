/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//二分查找
var searchMatrix = function (matrix, target) {
    //turn to One-dimensional array
    let isExist = false;
    
    // matrix.flat() error is weird
    let newArr = matrix.reduce((acc, val) => acc.concat(val), [])

    let left = 0;
    let right = newArr.length - 1
    let mid = parseInt((left + right) / 2)

    while (left <= right) {
        if (target > newArr[mid]) {
            left = mid + 1
        } else if (target < newArr[mid]) {
            right = mid - 1;
        } else {
            isExist = true;
            break;
        }

        mid = parseInt((left + right) / 2)
    }

    return isExist;
}

//暴力求解
// var searchMatrix = function (matrix, target) {
//     let isExist = false

//     if (!matrix || matrix.length === 0) {
//         return isExist;
//     }

//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[0].length; j++) {
//             if (matrix[i][j] === target) {
//                 isExist = true;
//             }
//         }
//     }

//     return isExist
// };