let sortarr = []

for (let i = 0; i < 10; i++) {
    newEl = Math.floor(Math.random() * 1000);
    sortarr.push(newEl)
}

console.log(sortarr)
console.log(sort(sortarr))


function findMin(arr) {
    let min = arr[0];
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}

function sort(arr) {
    let newArr = [];
    while (arr.length > 0) {
        let minIndex = findMin(arr);
        newArr.push(arr.splice(minIndex, 1)[0]);
    }
    return newArr
}