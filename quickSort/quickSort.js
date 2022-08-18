/**
 * Функция выполняет сотрировку массива методом "быстрой" сортировки.
 * @param {Array} arr 
 * @returns {Array}
 */
export default function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const lessArr = [];
        const greatArr = [];
        arr.slice(1).forEach((el) => { el < arr[0] ? lessArr.push(el) : greatArr.push(el) });
        return [...quickSort(lessArr), arr[0], ...quickSort(greatArr)];
    }
}