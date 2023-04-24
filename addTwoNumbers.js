//You are given two non-empty linked lists representing two non-negative integers. 
//The digits are stored in reverse order, and each of their nodes contains a single digit. 
//Add the two numbers and return the sum as a linked list.

//You may assume the two numbers do not contain any leading zero, except the number 0 itself.


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var l1 = l1;
    var l2 = l2;

    var prev = new ListNode(null);
    var prevp = prev;//prev pointer
    var carry = false;

    while(l1 || l2) {
        var curr = l1p != null ? l1p : l2p;
        var val1 = l1p != null ? l1p.val : 0;
        var val2 = l2p != null ? l2p.val : 0;
        var val3 = carry ? 1:0;
        var sum = val1 + val2 + val3;
        if(sum > 9) {
            sum = sum - 10;
            carry = true;
        } else {
            carry = false;
        }
        curr.val = sum;
        prevp.next = curr;
        prevp = prevp.next;
        if(l1p) l1p = l1p.next;
        if(l2p) l2p = l2p.next;
    }
    if(carry) {
        prevp.next = new ListNode(1);
    }   
    return prev.next;
};

//SECOND SOLUTION

var addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2) {
        return null;
    }
    
    if(!l1) {
        return l2;
    }
    
    if(!l2) {
        return l1;
    }
    
    const head = new ListNode(0, null);
    let carry = 0;
    
    let result = head;
    while(l1 || l2 || carry !== 0) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        const newNode = new ListNode(sum%10, null);

        result.next = newNode;

        
        carry = Math.trunc(sum/10);
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
        result = result.next;
    }
    
    return head.next;
};