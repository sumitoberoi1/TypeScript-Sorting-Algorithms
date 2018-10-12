const quickSort = (arr = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3]) => {
    if (arr.length < 2) {
        return arr
    }
    const pivot = arr[arr.length-1];
    let smallerList = [];
    let biggerList = [];
    for (let i = 0; i<arr.length-1 ; i++) {
        if (arr[i] > pivot) {
            biggerList.push(arr[i])
        } else {
            smallerList.push(arr[i]) 
        }
    }
    return [...quickSort(smallerList),pivot,...quickSort(biggerList)];
}
console.log(quickSort());