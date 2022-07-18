import { sub } from "date-fns";

/**
 * Sorts array in Ascending or Descending order.
 * @param {Array} array The original array to be sorted.
 * @param {String} order The Sense of sorting the array ["DESC" or "ASC"].
 * @returns {Array} Sorted Array.
 */
export const sortArray = (array, order = "DESC") => {
    if (order === "DESC") return [...array].sort((objA, objB) => new Date(objB.date) - new Date(objA.date));
    if (order === "ASC") return [...array].sort((objA, objB) => new Date(objA.date) - new Date(objB.date));
};

/**
 * Filters array based on a span-by-month value.
 * @param {Array} array The array to be filtered.
 * @param {Number} monthSpan The span value in months.
 * @returns Filtered Array.
 */
export const filterByMonthSpan = (array, monthSpan = null) => {
    const arrDates = array.map((obj) => new Date(obj.date));

    const maxDate = new Date(Math.max(...arrDates));
    const minDate = sub(maxDate, { months: monthSpan });

    return array.filter((obj) => {
        if (maxDate >= new Date(obj.date) && minDate <= new Date(obj.date)) return obj;
    });
};
