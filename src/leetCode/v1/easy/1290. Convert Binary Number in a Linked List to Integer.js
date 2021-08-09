/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
let getDecimalValue = function(head) {
  let binaryNum = '';
  while (head) {
    const next = head.next;
    binaryNum += head.val;
    head = next;
  }
  return Number.parseInt(binaryNum, 2);
};