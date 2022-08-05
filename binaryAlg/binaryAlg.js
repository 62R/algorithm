const list = [];
const item = 10;

for (let i = 0; i < 100; i++) {
    list[i] = i;
}

console.log(binarySearch(list, item), list[item]);

function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;

    if (item < 0 | item > high) {
        return null
    }

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        if (guess === item) {
            return mid
        }
        if (guess > item) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return null
}