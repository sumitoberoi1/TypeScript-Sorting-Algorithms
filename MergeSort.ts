const mergeSort = (arr = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]):number[] => {
    if (arr.length === 1) {
        return arr;
    }
    const middle = Math.floor(arr.length/2)
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return stitch(mergeSort(left),mergeSort(right));
}

const stitch = (left:number[],right:number[]) => {
    let i = 0;
    let j = 0;
    let sortedArray:number[] = []
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i+=1;
        } else {
            sortedArray.push(right[j]);
            j+=1;
        }
    }
    return sortedArray.concat(left.slice(i),right.slice(j))
}
console.log(mergeSort());