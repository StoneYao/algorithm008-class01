/**
 * @param {character[][]} grid
 * @return {number}
 */

//BFS
var numIslands = function (grid) {
    let count = 0;
    if (!grid || !grid[0]) {
        return count;
    }

    let m = grid.length;
    let n = grid[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                markIsland(i, j)
                count++
            }
        }
    }

    return count;

    function markIsland(i, j) {
        // if (i > m - 1 || j > n - 1 || i < 0 || j < 0 || grid[i][j] === '0') {
        //     return
        // }
        let queen = [[i, j]];

        while (queen.length > 0) {
            let arr = [];

            for (let k = 0; k < queen.length; k++) {

                let firstIndex = queen[k][0]
                let secondIndex = queen[k][1]

                if (grid[firstIndex][secondIndex] === '1') {
                    grid[firstIndex][secondIndex] = '0'

                    if (firstIndex > 0) {
                        arr.push([firstIndex - 1, secondIndex])
                    }

                    if (firstIndex < m - 1) {
                        arr.push([firstIndex + 1, secondIndex])
                    }

                    if (secondIndex > 0) {
                        arr.push([firstIndex, secondIndex - 1])
                    }

                    if (secondIndex < n - 1) {
                        arr.push([firstIndex, secondIndex + 1])
                    }
                }
            }

            queen = arr
        }
    }

}
//DFS
// var numIslands = function (grid) {
//     let count = 0;
//     if (!grid || !grid[0]) {
//         return count;
//     }

//     let m = grid.length;
//     let n = grid[0].length;

//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (grid[i][j] === '1') {
//                 markIsland(i, j)
//                 count++
//             }
//         }
//     }

//     return count;

//     function markIsland(i, j) {
//         if (i > m - 1 || j > n - 1 || i < 0 || j < 0 || grid[i][j] === '0') {
//             return
//         }

//         grid[i][j] = '0'

//         markIsland(i + 1, j)
//         markIsland(i - 1, j)
//         markIsland(i, j + 1)
//         markIsland(i, j - 1)
//     }
// };