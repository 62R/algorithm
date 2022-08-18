/**
 * Фунция рекурсивно считает сумму всех элементов массива.
 * @param {Array} arr 
 * @returns
 */
export default function recursiveSum(arr) {
    if (arr.length > 1) {
        return arr[0] + recursiveSum(arr.slice(1));
    } else {
        return arr[0];
    }
}