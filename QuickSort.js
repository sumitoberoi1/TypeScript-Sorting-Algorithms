var quickSort = function (arr) {
    if (arr === void 0) { arr = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]; }
    if (arr.length < 2) {
        return arr;
    }
    var pivot = arr[arr.length - 1];
    var smallerList = [];
    var biggerList = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > pivot) {
            biggerList.push(arr[i]);
        }
        else {
            smallerList.push(arr[i]);
        }
    }
    return quickSort(smallerList).concat([pivot], quickSort(biggerList));
};
console.log(quickSort());
