import isSorted from "./isSorted";

const selectionSort = async (array , setArray , speed) => {
    const arr = [...array];
    const n = arr.length;

    if (isSorted(arr)){
        return ;
    }

    for (let i = 0; i < n - 1; i++){
        let minIndex = i;
        for (let j = i + 1; j < n; j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        [arr[i] , arr[minIndex]] = [arr[minIndex] , arr[i]];
        
        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve , 151 - speed));
    }
};

export default selectionSort;