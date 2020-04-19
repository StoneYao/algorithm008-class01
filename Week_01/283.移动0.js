/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//方法一
//1.把0的坐标都拿出来存到一个新的数组里 2.把新数组循环，从中取出0到末尾并注意的是每次取0时，数组0在原数组的index已经发生变化。
// var moveZeroes = function (nums) {
//     let zeroIndexArr = []
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 0) {
//             zeroIndexArr.push(i)
//         }
//     }

//     zeroIndexArr.forEach((item, index) => {
//         nums.splice((item - index), 1);
//         nums.push(0);
//     })
//     return nums
// };

//方法二
//把数组中的非0 往前移，剩下的都是0
var moveZeroes = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j++] = nums[i];
        }
    }

    for (let i = j; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
};