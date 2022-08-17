const arrFindMax = [1, 2, 5, 6, 2, 6, 2, 6, 2, 45, 8];

console.log(findMax(arrFindMax));

function findMax(arr) {
    if (arr.length > 1) {
        const altMax = findMax(arr.slice(1));
        if (arr[0] > altMax) {
            return arr[0];
        } else {
            return altMax;
        }
    } else {
        return arr[0];
    }
}