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

/**
 * Функция выполняет сортировку массива методом сортировки выбором.
 * @param {Array} arr 
 * @returns {Array}
 */
export default function selectionSort(arr) {
    let newArr = [];
    while (arr.length > 0) {
        let minIndex = findMin(arr);
        newArr.push(arr.splice(minIndex, 1)[0]);
    }
    return newArr
}

