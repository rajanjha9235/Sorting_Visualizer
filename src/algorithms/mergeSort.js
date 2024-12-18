import isSorted from "./isSorted";

const mergeSort = async(array , setArray , speed) => {
    let arr = [...array];

    if (isSorted(arr)){
        return ;
    }

    const mergeSortHelper = async(start,end) => {
        if (start >= end) return;
        
        const mid = Math.floor((start + end) / 2);  // Find the mid
        
        // Split the array into two halves
        await mergeSortHelper( start , mid);
        
        await mergeSortHelper( mid + 1 , end);
        
        // Merge the two halves
        await merge( start , mid , end);
    };


    // Function to merge the 2 sorted Arrays into 1 sorted Array
    const merge = async(start,mid,end) => {
        
        let left = arr.slice(start , mid + 1);  // Sub-array from start to mid
        let right = arr.slice(mid + 1 , end + 1);  // Sub-array from mid + 1 to end
        
        let i = 0 , // Pointer for left sub-array
        j = 0,  // Pointer for right sub-array
        k = start;   // Pointer for the main array
    

        while (i < left.length && j < right.length){
            if (left[i] <= right[j]){
                arr[k] = left[i];
                i++;
            }
            else{
                arr[k] = right[j];
                j++;
            }
            k++;
            
            setArray([...arr]);  // Update the array
            await new Promise((resolve) => setTimeout(resolve, 101 - speed)); // Delay
        }
    
        // Copy the remaining elements of left sub-array
        while (i < left.length){
            arr[k] = left[i];
            i++;
            k++;
    
            setArray([...arr]);  // Update the array
            await new Promise((resolve) => setTimeout(resolve, 101 - speed)); // Delay
        }
    
    
        // Copy the remaining elements of right sub-array
        while (j < right.length){
            arr[k] = right[j];
            j++;
            k++;
    
            setArray([...arr]); // Update the array
            await new Promise((resolve) => setTimeout(resolve, 101 - speed));  // Delay
        }
    };

    // Call the helper function
    await mergeSortHelper(0 , arr.length - 1);
};


export default mergeSort;