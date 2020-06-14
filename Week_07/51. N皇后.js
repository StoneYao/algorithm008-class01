/**
 * @param {number} n
 * @return {string[][]}
 */

var solveNQueens = function (n) {
    let resultArr = []


    putQueens([], 1)

    function putQueens(currentValidQueenList, currentRow) {
        // console.log(currentValidQueenList)
      
        // console.log(currentRow)
      
        if (currentRow >= n + 1) {
            if(currentValidQueenList.length === n){
                 resultArr.push(currentValidQueenList)
            }
            return 
        }
      

        //循环每一列
        for (let i = 1; i <= n; i++) {
            if (isValid(currentValidQueenList, [currentRow, i])) {
                putQueens([...currentValidQueenList,[currentRow, i]], (currentRow+1))
            }
        }
    }
    
    return paintChessBoard(resultArr,n)
};

function isValid(currentValidQueenList, position) {
    let result = true;

    for (let i = 0; i < currentValidQueenList.length; i++) {
        if (position[1] === currentValidQueenList[i][1]) {
            result = false;
            break
        }

        if (Math.abs(currentValidQueenList[i][1] - position[1]) === (position[0] - currentValidQueenList[i][0])) {
            result = false;
            break;
        }
    }

    return result;
}

function paintChessBoard(positionArr,n){
   return positionArr.map(item=>{
     let arr = []
     
     for(let i=0; i<n;i++){
      let str = ""
      for(let j=1; j<n+1;j++){
          if(item[i][1] === j){
            str += "Q"
          }else{
            str += "."
          }
      }
      arr.push(str)
     }
     
     return arr
   })
}

solveNQueens(4)