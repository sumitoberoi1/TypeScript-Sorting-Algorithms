const insertionSort = (arr = [4,56,7,8]) => {
   
    for (let i=0; i<arr.length; i++) {
        const temp = arr[i];
        let lastJ = -1;
        for (let j = i-1; j >= 0; j--) {
            if (arr[i] < arr[j]) {
                arr[j+1] = arr[j];
                lastJ = j
            }
        }
        if (lastJ > 0) {
            arr[lastJ] = temp;
        }
    }
   
    return arr;
}
console.log(insertionSort());