/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
    if (!wordList.includes(endWord)) {
        return 0;
    }

    let count = 0;
    let isFindEndWord = false

    let visitedWords = [beginWord]
    let currentStepArr = [beginWord];

    while (currentStepArr.length > 0 && !isFindEndWord) {
        let arr = []
        let isExitValidVal = false

        for (let i = 0; i < currentStepArr.length; i++) {
            for (let j = 0; j < wordList.length; j++) {
                if (checkIsOneStepChange(currentStepArr[i], wordList[j]) && !visitedWords.includes(wordList[j])) {
                    isExitValidVal = true

                    if (wordList[j] === endWord) {
                        isFindEndWord = true
                    }

                    arr.push(wordList[j]);
                    visitedWords.push(wordList[j])
                }
            }
        }

        if (isExitValidVal) {
            count++;
        }else{
            count = 0;
            break;
        }
        
        currentStepArr = arr;
    }

    return count && (count + 1);

    function checkIsOneStepChange(word1, word2) {
        let changeCount = 0;

        for (let i = 0; i < word1.length; i++) {
            if (word1[i] !== word2[i]) {
                changeCount++;
            }
        }

        return changeCount === 1 ? true : false;
    }
};