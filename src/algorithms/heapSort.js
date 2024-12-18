import isSorted from "./isSorted";


const heapSort = async (array , setArray , speed) => {
    const arr = [...array];
    let size = arr.length;

    if (isSorted(arr)){
        return ;
    }

    // Heapify the array from i to size --> Upside Down
    const heapify = async (size , i) => {
        
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < size && arr[left] > arr[i]){
            largest = left;
        }

        if (right < size && arr[right] > arr[largest]){
            largest = right;
        }

        // If the largest node is not the root node
        if (largest !== i){
            [arr[i] , arr[largest]] = [arr[largest] , arr[i]];
            
            setArray([...arr]);
            await new Promise(resolve => setTimeout(resolve , 101 - speed));

            await heapify(size , largest); // Recursively heapify the subtree from the largest node to end
        }
    };


    // Build max heap by heapifying non-leaf nodes
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--){
        await heapify(size , i);
    }

    // 
    while (size > 0){
        
        // Step - 1 : Swap the root node with the last node and reduce the size of the heap
        // So that the last node is sorted
        [arr[0] , arr[size - 1]] = [arr[size - 1], arr[0]];
        size--;

        setArray([...arr]);  // Update the array
        await new Promise(resolve => setTimeout(resolve , 101 - speed));  // Delay for visualization

        // Step - 2 : Heapify the root node
        await heapify(size , 0);
    }

};



export default heapSort;