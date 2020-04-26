/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let condition = true;

    let hashMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (hashMap.get(s[i])) {
            let value = hashMap.get(s[i])
            hashMap.set(s[i], value + 1)
        } else {
            hashMap.set(s[i], 1)
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (hashMap.get(t[i])) {
            let value = hashMap.get(t[i])

            if(value === 1){
                hashMap.delete(t[i])
            }else{
                hashMap.set(t[i], value - 1)
            }
        } else {
            condition = false
            break;
        }
    }

    if(hashMap.size>0){
        condition = false;
    }

    return condition;
};