import isSorted from "./isSorted";

const quickSort = async(array , setArray , speed) => {
    const arr = [...array];

    if (isSorted(arr)){
        return ;
    }

    const quickSortHelper = async(low , high) => {
        if (low < high){
            const pivotIndex = await partition( low , high);
            
            await quickSortHelper( low , pivotIndex - 1);
            
            await quickSortHelper( pivotIndex + 1 , high);
        }
    };


    const partition = async(low , high) => {
        const pivot = arr[high];
        let i = low - 1;
        for (let j = low; j < high ; j++){
            if (arr[j] < pivot){
                i++;
                [arr[i] , arr[j]] = [arr[j] , arr[i]];

                setArray([...arr]);
                await new Promise((resolve) => setTimeout(resolve , 101 - speed));
            }
        }
        [arr[i + 1] , arr[high]] = [arr[high] , arr[i + 1]];

        setArray([...arr]);
        await new Promise((resolve) => setTimeout(resolve , 101 - speed));

        return i + 1;
    };

    await quickSortHelper(0 , arr.length - 1);
}


export default quickSort;