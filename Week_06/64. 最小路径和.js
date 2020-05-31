//找重复性
//定义状态 f[i][j]
//dp方程  min f[m][n] = min(f[m - 1][n], f[m][n - 1]) + grid[m][n];
//直接运行则是m ** n 的时间复杂度，就像爬楼梯一样会超时
//这时需要记忆化搜索进行剪枝 (别忘记在 hash不存在以及存在更优解时更新 hash的值)

//----做题中间有个小插曲
//很奇怪 总共61个 test case 第60个失败 预期823 输出1003
//debug了半天发现少了3400多个位置没有遍历到 
//最后发现是hashMap的key用的不够唯一性， 因为直接是 i + "" + j 导致 1,11和11,1，以及 111,1 11，11 1，111 这些不同位置的数据当成同一位置的数据

var minPathSum = function (grid) {
    if (grid.length === 0) {
        return 0
    }

    let hashMap = new Map() //记忆化搜索所需的hashMap

    return dp(grid.length - 1, grid[0].length - 1, 0)

    //num 当前位置到右下角所需的数字总和
    function dp(i, j, num) {
        if (i < 0 || j < 0) {
            return Infinity
        }

        let str = i + "-" + j;
        if (hashMap.get(str)) {
            if (hashMap.get(str) <= num) {
                return Infinity
            } else {
                hashMap.set(str, num)
            }
        } else {
            hashMap.set(str, num)
        }

        if (i === 0 && j === 0) {
            return grid[i][j]
        }

        return Math.min(dp(i - 1, j, num + grid[i][j]), dp(i, j - 1, num + grid[i][j])) + grid[i][j]
    }
};