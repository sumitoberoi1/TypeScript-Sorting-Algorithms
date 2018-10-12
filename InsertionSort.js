var insertionSort = function (arr) {
    if (arr === void 0) { arr = [4, 56, 7, 8]; }
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        var lastJ = -1;
        for (var j = i - 1; j >= 0; j--) {
            if (arr[i] < arr[j]) {
                arr[j + 1] = arr[j];
                lastJ = j;
            }
        }
        if (lastJ > 0) {
            arr[lastJ] = temp;
        }
    }
    return arr;
};
console.log(insertionSort());
