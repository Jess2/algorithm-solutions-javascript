/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
let invertTree = function(root) {
  if (root) {
    let temp = invertTree(root.left);
    root.left = invertTree(root.right);
    root.right = temp;
  }

  return root;
};