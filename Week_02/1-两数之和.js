/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//hashmap 解法
let twoSum = (nums, target) => {
    let targetMap = new Map()
    for (let i = 0; i < nums.length; i++) {
      const key = target - nums[i]
      if (targetMap.has(key)) {
        return [targetMap.get(key), i]
      }
      targetMap.set(nums[i], i)
    }
  }


// var twoSum = function (nums, target) {
//     let hashMap = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         hashMap.set(nums[i], i);
//     }

//     let arr;
//     for (let [key, value] of hashMap.entries()) {
//         if(hashMap.get(target-key)){
//             arr = [value,hashMap.get(target-key)]
//             break;
//         }
//     }

//     if(arr[0] === arr[1]){
//         arr[0] = nums.findIndex(item=>item===nums[arr[0]])
//     }

//     return arr;
// };