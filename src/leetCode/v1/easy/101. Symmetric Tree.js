/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  function isMirror (p, q) {
    if (!p && !q) {
      return true;
    }
    if (!p || !q || p.val !== q.val) {
      return false;
    }
    return isMirror(p.left, q.right) && isMirror(p.right, q.left);
  }
  return isMirror(root.left, root.right);
};