/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function (nums, target) {
    // 方法一
    //暴力法 时间复杂度 O(n*n)  空间复杂度O(1)
    // let index1, index2;
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === target) {
    //             index1 = i;
    //             index2 = j;
    //         }
    //     }
    // }

    // return [index1, index2];

    // 方法二
    //1. nums 排序 2. 左右收敛  时间复杂度O(n) 空间复杂度O(n) 
    let newArr = [...nums].sort((a, b) => a - b);

    let index1, index2;
    for (let i = 0, j = newArr.length - 1; i < j;) {
        if (newArr[i] + newArr[j] > target) {
            j--
        } else if (newArr[i] + newArr[j] === target) {
            index1 = nums.findIndex(item => item === newArr[i]);
            index2 = nums.findIndex((item, index) => item === newArr[j] && index1 !== index);

            break;
        } else {
            i++;
        }
    }

    return [index1, index2];
};