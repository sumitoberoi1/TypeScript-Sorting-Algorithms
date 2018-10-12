var bubbleSort = function (arr) {
    if (arr === void 0) { arr = [4, 56, 7, 8, 8, 3, 6789, 4586, 0, 76]; }
    while (true) {
        var isSwapped = false;
        for (var i = 0; i < arr.length; i++) {
            if (i < arr.length - 1) {
                console.log(arr[i]);
                console.log(" + 1: " + arr[i + 1]);
                if (arr[i] > arr[i + 1]) {
                    var temp = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = temp;
                    isSwapped = true;
                    console.log("look I am true");
                }
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return arr;
};
var swap = function (num1, num2) {
    var temp = num1;
    num1 = num2;
    num2 = temp;
};
console.log(bubbleSort());
