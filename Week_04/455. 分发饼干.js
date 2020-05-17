/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    let sortedG = g.sort((a, b) => a - b)
    let sortedS = s.sort((a, b) => a - b)

    let giCursor = 0;
    let siCursor = 0
    let count = 0;
    moveCursor(giCursor, siCursor)

    return count;
    
    function moveCursor(giCursor, siCursor) {
        if (giCursor === sortedG.length || siCursor === sortedS.length) {
            return
        }

        if (sortedG[giCursor] <= sortedS[siCursor]) {
            moveCursor(giCursor + 1, siCursor + 1)
            count++;
        } else {
            moveCursor(giCursor, siCursor + 1)
        }
    }
}