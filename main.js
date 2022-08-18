import binarySearch from "./binaryAlg/binaryAlg.js";
import selectionSort from "./selectionSort/selectionSort.js";
import recursiveSum from "./recursion/sum.js";
import findMax from "./recursion/findMax.js";
import quickSort from "./quickSort/quickSort.js";


let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 1000));
}

console.log(arr);

console.log('quick sort ' + quickSort(arr));
console.log('findMax ' + findMax(arr));
console.log('sum ' + recursiveSum(arr));
console.log('binary search ' + binarySearch(quickSort(arr), arr[7]));

console.log('seleciton sort ' + selectionSort(arr));