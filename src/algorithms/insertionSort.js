import isSorted from "./isSorted";

const insertionSort = async (array , setArray , speed) => {
    let arr = [...array];

    if (isSorted(arr)){
        return ;
    }
    
    for (let i = 1 ; i < arr.length ; i++){
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j -= 1;

            setArray([...arr]);
            await new Promise((resolve) => setTimeout(resolve , 101 - speed));
        }
        arr[j + 1] = key;

        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve , 101 - speed))
    }

};

export default insertionSort;