/**
 * Функция осуществляет бинарный поиск элемента в сортированном массиве. Возвращяет индекс элемента. Если элемент не найден возвращает null.
 * @param {Array} arr
 * @param {Number} item 
 * @returns Item index in array. 
 */
export default function binarySearch(arr, item) {
    let lowIndex = 0;
    let highIndex = arr.length - 1;

    if (item < arr[lowIndex] | item > arr[highIndex]) {
        return null
    }

    while (lowIndex <= highIndex) {
        let mid = Math.floor((lowIndex + highIndex) / 2);
        let guess = arr[mid];
        if (guess === item) {
            return mid
        }
        if (guess > item) {
            highIndex = mid - 1
        } else {
            lowIndex = mid + 1
        }
    }

    return null
}