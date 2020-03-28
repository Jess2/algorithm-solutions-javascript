/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function (head) {
  const traverse = (curr, prev) => {
    if (curr === null) {
      return;
    }
    if (prev && prev.val === curr.val) {
      prev.next = curr.next;
      traverse(prev.next, prev);
    } else {
      traverse(curr.next, curr);
    }
  };
  traverse(head, null);
  return head;
};