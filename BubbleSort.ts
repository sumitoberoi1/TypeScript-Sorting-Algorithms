const bubbleSort = (arr = [4,56,7,8,8,3,6789,4586,0,76]):number[] => {
    while(true) {
      let isSwapped = false;
      for(let i:number=0;i<arr.length;i++) {
        if (i<arr.length - 1) {
          console.log(` + 1: ${arr[i+1]}`);
          if (arr[i] > arr[i+1]) {
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            isSwapped = true;
          }
        }
      }
      if (!isSwapped) {
        break;
      }
    }
    return arr;
  }
  
  const swap = (num1:number,num2:number):void => {
      let temp = num1;
      num1 = num2;
      num2 = temp;
  }
  console.log(bubbleSort());