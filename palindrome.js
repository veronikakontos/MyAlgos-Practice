//Example 1:
//Input: x = 121
//Output: true
//Explanation: 121 reads as 121 from left to right and from right to left.

//Example 2:
//Input: x = -121
//Output: false
//Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome

//Example 3:
//Input: x = 10
//Output: false
//Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp = x;
    let reversedNum = 0;
    
    while (temp >= 1) {
        let digit = Math.floor(temp % 10);
        reversedNum = Math.floor(reversedNum * 10 + digit);
        temp = Math.floor(temp / 10);
    }
    
    if (x === reversedNum) {
        return true;
    }
    return false
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))

