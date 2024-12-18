import { useEffect } from "react";
import { useState } from "react";

import {bubbleSort , mergeSort , insertionSort , quickSort , heapSort , selectionSort} from "./algorithms";
import {BubbleSort , MergeSort , SelectionSort , QuickSort , HeapSort , InsertionSort} from "./components";

function App() {

  const [array,setArray] = useState([]);
  const [arraySize , setArraySize] = useState(50);
  const [speed , setSpeed] = useState(50);

  const [algortihm , setAlgorithm] = useState("bubbleSort");
  const [sorting , setSorting] = useState(false);
  const [completed , setCompleted] = useState(false);

  useEffect(() => {
    resetArray();
  } , [arraySize]);

  const resetArray = () =>{

    const newArray = [];
    for (let i = 0; i < arraySize ; i++){
      newArray.push(Math.floor(Math.random() * 100) + 8);
    }
    setArray(newArray);
    setCompleted(false);
  }


  const handleSort = async () => {
    setSorting(true);
    setCompleted(false);
    
    switch(algortihm){
      case "bubbleSort":
        await bubbleSort(array , setArray , speed);
        break;
      
      case "mergeSort":
        await mergeSort(array , setArray , speed);
        break;
      
      case "insertionSort":
        await insertionSort(array , setArray , speed);
        break;
      
      case "quickSort":
        await quickSort(array , setArray , speed);
        break;
      
      case "heapSort":
        await heapSort(array , setArray , speed);
        break;
      
      case "selectionSort":
        await selectionSort(array , setArray , speed);
        break;

      default:
        break;
    }

    setCompleted(true);
    setSorting(false);
  };


  const handleReset = () => {
    resetArray();
    setSorting(false);
    setCompleted(false);
  }
  

  return (
    <div className="container mx-auto px-4 py-8" >
      
      <h1 className="text-4xl font-bold text-center mb-8 ">
        Sorting Visualizer
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-2">

        <select
        className="px-4 py-2 border rounded-md"
        value={algortihm}
        onChange={(e) => setAlgorithm(e.target.value)}
        disabled={sorting}
        >

          <option value="bubbleSort">Bubble Sort</option>

          <option value="mergeSort">Merge Sort</option>
          
          <option value="insertionSort">Insertion Sort</option>
          
          <option value="quickSort">Quick Sort</option>

          <option value="heapSort">Heap Sort</option>

          <option value="selectionSort">Selection Sort</option>

        </select>


        <button
        className={`px-4 py-2 rounded-md ${sorting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"} `}
        onClick={handleSort}
        disabled={sorting}
        >
          {sorting ? "Sorting..." : "Sort"}
        </button>


        <button
        className={`px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md ${sorting ? "cursor-not-allowed" : ""}`}
        onClick={handleReset}
        disabled={sorting}
        >
          Reset
        </button>

      </div>


      <div className="flex flex-wrap justify-center gap-4 mb-10">  {/* It has Size and speed control */}

        <div className="flex items-center">  {/* For the Size Control control */}
          
          <label htmlFor="arraySize" className="mr-2">
            Array Size :
          </label>

          <input type="range" id="arraySize"
          min="10"  max="100" value={arraySize}
          onChange={(e) => setArraySize(parseInt(e.target.value))}
          className="w-32"
          disabled={sorting}/>

          <span className="ml-2">{arraySize}</span>

        </div>


        <div className="flex items-center">  {/* For Speed Control */}
          
          <label htmlFor="speed" className="mr-2">
            Speed :
          </label>

          <input type="range" id="speed"
          min="1" max="100"  value={speed}
          onChange={(e) => setSpeed(parseInt(e.target.value))}
          className="w-32"
          disabled={sorting}/>

          <span className="ml-2">{speed}</span>
        </div>

      </div>



      <div className="flex items-end justify-center h-64 border-b-2 border-gray-300 ">

        {array.map((value , index) => (
          <div key={index}
          className={`w-8 mx-px transition-all duration-200 ${completed ? "bg-green-500" : "bg-blue-500"} rounded-t-xl `}
          style={{height : `${value}%`}}
          >
            {/* {value} */}
          </div>
        ))}
      </div>

      {completed && (
        <div className="text-center mt-4 text-green-500 font-bold">
          Sorting Completed!
        </div>
      )}

      {algortihm == "bubbleSort" && <BubbleSort />}
      {algortihm == "mergeSort" && <MergeSort />}
      {algortihm == "insertionSort" && <InsertionSort />}
      {algortihm == "quickSort" && <QuickSort />}
      {algortihm == "heapSort" && <HeapSort />}
      {algortihm == "selectionSort" && <SelectionSort />}

    </div>
  )
}

export default App;

