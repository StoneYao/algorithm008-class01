/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let arr = [];

    generate(0,0,n,"")
    
    function generate(left,right,n,str){
        if(left<right){
            return false;
        }

        if(left>n){
            return false;
        }

        if((right === n) && (left === n)){
            arr.push(str)
        }

        generate(left+1,right,n,str+"(");
        generate(left,right+1,n,str+")");
    }

    return arr
};