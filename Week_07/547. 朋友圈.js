/**
 * @param {number[][]} M
 * @return {number}
 * 好文章参考: https://blog.csdn.net/dm_vincent/article/details/7655764
 */


//方法五   优化find里 查询的次数 的次数 --- 将树的level都变成1,压缩路径。
var findCircleNum = function (M) {
    if (M.length === 0) {
        return 0
    }

    let length = M.length;
    let unionFind = new UF(length)

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (M[i][j] === 1) {
                unionFind.union(i, j)
            }
        }
    }

    return unionFind.count
}

class UF {
    constructor(length) {
        this.groups = [];
        this.count = length;

        //init groups
        for (let i = 0; i < length; i++) {
            this.groups[i] = i;
        }
    }

    union = (a, b) => {
        let rootA = this.find(a);
        let rootB = this.find(b);

        if (rootA === rootB) return;

        this.groups[rootA] = rootB

        //压缩路径
        while (this.groups[a] !== a) {
            let cur = a;
            a = this.groups[a]
            this.groups[cur] = rootB
        }

         while (this.groups[b] !== b) {
            let cur = b;
            b = this.groups[b]
            this.groups[cur] = rootB
        }

        this.count--;
    };

    find = (index) => (this.groups[index] === index ? index : this.find(this.groups[index]))

    // isConnected = (a, b) => this.find(a).index === this.find(b).index;
}

//方法五   优化find里 查询的次数 的次数 --- 将树的层数变成均匀分布。
// var findCircleNum = function (M) {
//     if (M.length === 0) {
//         return 0
//     }

//     let length = M.length;
//     let unionFind = new UF(length)

//     for (let i = 0; i < length; i++) {
//         for (let j = i + 1; j < length; j++) {
//             if (!unionFind.isConnected(i, j) && M[i][j] === 1) {
//                 unionFind.union(i, j)
//             }
//         }
//     }

//     return unionFind.count
// }

// class UF {
//     constructor(length) {
//         this.groups = [];
//         this.count = length;

//         //init groups
//         for (let i = 0; i < length; i++) {
//             this.groups[i] = i;
//         }
//     }

//     union = (a, b) => {
//         let aObj = this.find(a)
//         let bObj = this.find(b)

//         let rootA = aObj.index;
//         let rootB = bObj.index;

//         if (rootA === rootB) return;

//         if (aObj.findCount <= aObj.findCount) {
//             this.groups[rootA] = rootB
//         } else {
//             this.groups[rootB] = rootA
//         }

//         this.count--;
//     };

//     find = (index, findCount = 0) => {
//         if (this.groups[index] === index) {
//             return { index, findCount }
//         }

//         return this.find(this.groups[index], findCount + 1)
//     }

//     isConnected = (a, b) => this.find(a).index === this.find(b).index;
// }

//方法四 优化union里 查询的次数 的次数 --- 将group 由数组变成树  但是极端情况下 树的层数可能很多 
// var findCircleNum = function (M) {
//     if (M.length === 0) {
//         return 0
//     }

//     let length = M.length;
//     let unionFind = new UF(length)

//     for (let i = 0; i < length; i++) {
//         for (let j = i + 1; j < length; j++) {
//             if (!unionFind.isConnected(i, j) && M[i][j] === 1) {
//                 unionFind.union(i, j)
//             }
//         }
//     }

//     return unionFind.count
// }

// class UF {
//     constructor(length) {
//         this.groups = [];
//         this.count = length;

//         //init groups
//         for (let i = 0; i < length; i++) {
//             this.groups[i] = i;
//         }
//     }

//     union = (a, b) => {
//         let rootA = this.find(a);
//         let rootB = this.find(b);

//         if (rootA === rootB) return;

//         this.groups[rootA] = rootB

//         this.count--;
//     };

//     find = index => {
//         if(this.groups[index] === index){
//             return index
//         }

//         return this.find(this.groups[index])
//     }

//     isConnected = (a, b) => this.find(a) === this.find(b);
// }

//方法三 union-find 优化循环并union 的次数  --- j 由 0 变成 i+1
// var findCircleNum = function (M) {
//     if (M.length === 0) {
//         return 0
//     }

//     let length = M.length;
//     let unionFind = new UF(length)

//     for (let i = 0; i < length; i++) {
//         for (let j = i + 1; j < length; j++) {
//             if (!unionFind.isConnected(i, j) && M[i][j] === 1) {
//                 unionFind.union(i, j)
//             }
//         }
//     }

//     return unionFind.count
// }

// class UF {
//     constructor(length) {
//         this.groups = [];
//         this.count = length;

//         //init groups
//         for (let i = 0; i < length; i++) {
//             this.groups[i] = i;
//         }
//     }

//     union = (a, b) => {
//         let rootA = this.find(a);
//         let rootB = this.find(b);

//         if (rootA === rootB) return;

//         for (let i = 0; i < this.groups.length; i++) {
//             if (this.groups[i] === rootB) {
//                 this.groups[i] = rootA
//             }
//         }

//         this.count--;
//     };

//     find = index => this.groups[index];

//     isConnected = (a, b) => this.groups[a] === this.groups[b];

//     count = () => this.count;
// }

//方法二 暴力 union-find
// var findCircleNum = function (M) {
//     if (M.length === 0) {
//         return 0
//     }

//     let length = M.length;
//     let unionFind = new UF(length)

//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < length; j++) {
//             if (!unionFind.isConnected(i, j) && M[i][j] === 1) {
//                 unionFind.union(i, j)
//             }
//         }
//     }

//     return unionFind.count
// }

// class UF {
//     constructor(length) {
//         this.groups = [];
//         this.count = length;

//         //init groups
//         for (let i = 0; i < length; i++) {
//             this.groups[i] = i;
//         }
//     }

//     union = (a, b) => {
//         let rootA = this.find(a);
//         let rootB = this.find(b);

//         if (rootA === rootB) return;

//         for (let i = 0; i < this.groups.length; i++) {
//             if (this.groups[i] === rootB) {
//                 this.groups[i] = rootA
//             }
//         }

//         this.count--;
//     };

//     find = index => this.groups[index];

//     isConnected = (a, b) => this.groups[a] === this.groups[b];

//     count = () => this.count;
// }

//方法一 -- DFS  失败 暂时搁置
//类似求岛屿数量
//思路 当出现一个岛屿时 上下左右的去递归看看有没有1 如果有则变成0，同时岛屿数量➕1
//但是这一题有点特殊， 对角线不算朋友圈，同时 M[i][j] = 1，则有M[j][i] = 1 .因为 i是j的朋友 则j也是i的朋友
//这个跟岛屿游戏不一样，区别在于岛屿游戏是挨着判定，每个都是孤立的。但是这一题的朋友判定不一定是挨着。例如 2-1 2-3 ，1和3 不是挨着 但是也是一个朋友圈
//可以DFS 但是删除当前朋友圈内的所有元素的判定条件要改 
// var findCircleNum = function (M) {
//     //边界条件
//     if (M.length === 0) {
//         return 0
//     }

//     let count = 0;

//     let length = M.length


//     //记录列
//     let hashMap = new Map()

//     for (let i = 0; i < length; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i === j) {
//                 continue
//             } else {
//                 if (hashMap.has(i + "-" + j)) {
//                     continue
//                 }

//                 hashMap.set(j + "-" + i, 1)

//                 removeFriends(i, j)
//                 count += 1
//             }
//         }
//     }

//     return count;

//     function removeFriends(i, j) {
//         if (i < 0 || i > m - 1 || j < 0 || j > n - 1) {
//             return
//         }

//         if (M[i][j] === 0) {
//             return
//         }

//         M[i][j] = 0

//         removeFriends(i + 1, j)
//         removeFriends(i - 1, j)
//         removeFriends(i, j + 1)
//         removeFriends(i, j - 1)
//     }
// };