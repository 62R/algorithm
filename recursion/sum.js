const sumarr = [1, 2, 5, 6, 2, 6, 2, 6, 2, 45, 8];

console.log(sum(sumarr));

function sum(arr) {
    if (arr.length > 1) {
        return arr[0] + sum(arr.slice(1));
    } else {
        return arr[0];
    }
}