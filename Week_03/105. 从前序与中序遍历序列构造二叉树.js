/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!inorder.length) return null
    let tmp = preorder[0],mid = inorder.indexOf(tmp)
    let root = new TreeNode(tmp)
    root.left = buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid))
    root.right = buildTree(preorder.slice(mid+1),inorder.slice(mid + 1))
    return root
};

// var buildTree = function (preorder, inorder) {

//     if (inorder.length === 0) {
//         return null;
//     }

//     let mid = preorder[0]

//     let root = new TreeNode(mid)

//     if (preorder.length === 1) {
//         return root
//     }

//     let index = inorder.findIndex(item => item === mid)

//     let newPreorder = [...preorder];
//     newPreorder.shift()

//     root.right = buildTree(newPreorder, inorder.slice(index + 1, inorder.length));
//     root.left = buildTree(newPreorder, inorder.slice(0, index));

//     return root;
// };


