/**
 * Функция находит наибольшее значение в массиве с использованием рекурсии.
 * @param {Array} arr 
 * @returns
 */
export default function findMax(arr) {
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