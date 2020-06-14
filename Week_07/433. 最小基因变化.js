/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */

//BFS
var minMutation = function (start, end, bank) {
    let count = -1
    let level = 0;

    let queen = [start];

    while (queen.length > 0 && count === -1) {
        let newQueen = []

        for (let j = 0; j < queen.length; j++) {
            for (let i = 0; i < bank.length; i++) {
                if (checkNotSameCount(queen[j], bank[i]) === 1) {
                    newQueen.push(bank[i])
                }
            }
        }

        for (let k = 0; k < newQueen.length; k++) {
            let index = bank.findIndex(item => item === newQueen[k])
            index !== -1 && bank.splice(index, 1);
        }

        if (newQueen.length > 0) {
            level++;
        }

        console.log(newQueen)
        console.log(bank)

        if (newQueen.includes(end)) {
            count = level
            break;
        }

        queen = newQueen;
    }

    return count;

    function checkNotSameCount(str1, str2) {
        let count = 0;

        for (let i = 0; i < str2.length; i++) {
            if (str1[i] !== str2[i]) {
                count++;
            }
        }

        return count;
    }
}



// DFS
// var minMutation = function (start, end, bank) {
//     if (!bank.includes(end)) {
//         return -1
//     }

//     let successCount = -1;

//     dfsCheck(start, bank, 1)

//     return successCount;

//     function dfsCheck(currentStr, currentUnVisitedbank, level) {
//         for (let i = 0; i < currentUnVisitedbank.length; i++) {
//             if (checkNotSameCount(currentStr, currentUnVisitedbank[i]) === 1) {
//                 if (currentUnVisitedbank[i] === end) {
//                     successCount = successCount === -1 ? level : Math.min(successCount, level);
//                     break;
//                 }

//                 let newArr = [...currentUnVisitedbank];
//                 newArr.splice(i, 1)

//                 dfsCheck(currentUnVisitedbank[i], newArr, level + 1)
//             }
//         }
//     }

//     function checkNotSameCount(str1, str2) {
//         let count = 0;

//         for (let i = 0; i < str2.length; i++) {
//             if (str1[i] !== str2[i]) {
//                 count++;
//             }
//         }

//         return count;
//     }
// };