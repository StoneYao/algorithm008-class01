/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    //p和q在两边
    //p和q在一边
    //一个节点
    let x;

    dfs(root)

    function dfs(treeNode) {
        if (!treeNode) {
            return false
        }

        let left = dfs(treeNode.left);
        let right = dfs(treeNode.right)

        if (left && right) {
            x = treeNode
            return false;
        }

        if ((treeNode === p||treeNode === q) && (left || right))         {
            x = treeNode
            return false;
        }

        return treeNode === p||treeNode === q || left || right;
    }

    return x
};