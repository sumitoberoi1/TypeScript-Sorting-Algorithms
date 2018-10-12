var mergeSort = function (arr) {
    if (arr === void 0) { arr = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]; }
    if (arr.length === 1) {
        return arr;
    }
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return stitch(mergeSort(left), mergeSort(right));
};
var stitch = function (left, right) {
    var i = 0;
    var j = 0;
    var sortedArray = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i += 1;
        }
        else {
            sortedArray.push(right[j]);
            j += 1;
        }
    }
    console.log("i : " + i + " " + j);
    return sortedArray.concat(left.slice(i), right.slice(j));
};
console.log(mergeSort());
