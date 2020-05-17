/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    //sort 0,1,2,3
    let index;
    let newArr = []
    let start = 0;
    let end = nums.length - 1;
    let mid = Math.floor((start + end) / 2);

    if (nums.length <= 1) {
        return nums[0] === target ? 0 : -1;
    }

    while (nums[mid] < nums[mid + 1]) {
        if (nums[mid] === target) {
            index = mid;
            break;
        }

        if (nums[mid] > nums[start]) {
            start = mid + 1;
        } else if (nums[mid] === nums[start]) {
            // for [1,2,3] which is normal order
            mid = end
            break;
        } else {
            end = mid - 1
        }

        mid = Math.floor((start + end) / 2);
    }

    if (index) {
        return index;
    }

    let reverseIndex = mid + 1

    let newStart;
    let newEnd;
    if (target > nums[0]) {
        newStart = 0;
        newEnd = reverseIndex - 1;
    } else if (target === nums[0]) {
        return 0;
    } else {
        newStart = reverseIndex;
        newEnd = nums.length - 1;
    }

    let newMid = Math.floor((newStart + newEnd) / 2);

    //二分法
    while (newStart <= newEnd) {
        if (target > nums[newMid]) {
            newStart = newMid + 1
        } else if (target < nums[newMid]) {
            newEnd = newMid - 1;
        } else {
            index = newMid;
            break;
        }

        newMid = Math.floor((newStart + newEnd) / 2);
    }

    return index || -1
};