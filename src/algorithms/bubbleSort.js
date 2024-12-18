import isSorted from "./isSorted";

const bubbleSort = async (array , setArray , speed ) => {
    let arr = [...array];
    let len = arr.length;

    if (isSorted(arr)){
      return ;
    }

    for (let i = 0; i < len ; i++){
      for (let j = 0; j < len - i - 1; j++){
        
        if (arr[j] > arr[j+1]){
          
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          
          setArray([...arr]);  // Update the array
          await new Promise((resolve) => setTimeout(resolve, 101 - speed));  // Delay
        }
      }
    }
  };

export default bubbleSort;