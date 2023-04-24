/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let ans = -1;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            ans = i;
            break;
        }
    }
    
    return ans;
};


//2.SOLUTION

// var search = function(nums, target) {
//     if (nums.includes(target)) {
//         return nums.indexOf(target)
//     }
//     return -1
// };