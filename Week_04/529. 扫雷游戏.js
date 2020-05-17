/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */

// dfs
var updateBoard = function (board, click) {
    if (board[click[0]][click[1]] === 'M') {
        board[click[0]][click[1]] = 'X'
        return board;
    }

    let positionVisited = []

    mark(click, 0)

    return board;

    function mark(position) {
        if(isPositionVisited(position)){
            return;
        }

        let firstIndex = position[0]
        let secondIndex = position[1]

        board[firstIndex][secondIndex] = identifyCurrentVal(position)
        positionVisited.push(firstIndex + "fuckyou" + secondIndex)

        if (identifyCurrentVal(position) === "B") {
            let siblingsPositionArr = getSiblingsPositionArr(position);

            for (let i = 0; i < siblingsPositionArr.length; i++) {
                let index1 = siblingsPositionArr[i][0];
                let index2 = siblingsPositionArr[i][1];

                if (isPositionLegal(index1, index2)) {
                    mark(siblingsPositionArr[i])
                }
            }
        }
    }

    function isPositionVisited(position) {
        let str = position[0] + "fuckyou" + position[1];

        return positionVisited.includes(str)
    }

    function identifyCurrentVal(position) {
        let detectedMineCount = 0;
        
        let siblingsPositionArr = getSiblingsPositionArr(position)

        for (let i = 0; i < siblingsPositionArr.length; i++) {
            let index1 = siblingsPositionArr[i][0];
            let index2 = siblingsPositionArr[i][1];

            if (isPositionLegal(index1, index2)) {
                if (board[index1][index2] === 'M') {
                    detectedMineCount++;
                }
            }
        }

        if (detectedMineCount > 0) {
            return detectedMineCount.toString()
        } else {
            return 'B'
        }
    }

    function getSiblingsPositionArr(position) {
        let firstIndex = position[0]
        let secondIndex = position[1]

        return [
            [firstIndex - 1, secondIndex],
            [firstIndex - 1, secondIndex - 1],
            [firstIndex - 1, secondIndex + 1],
            [firstIndex + 1, secondIndex],
            [firstIndex + 1, secondIndex - 1],
            [firstIndex + 1, secondIndex + 1],
            [firstIndex, secondIndex],
            [firstIndex, secondIndex - 1],
            [firstIndex, secondIndex + 1],
        ]
    }

    function isPositionLegal(firstIndex, secondIndex) {
        if (firstIndex < 0 || firstIndex > board.length - 1 || secondIndex < 0 || secondIndex > board[0].length - 1) {
            return false;
        } else {
            return true
        }
    }
};