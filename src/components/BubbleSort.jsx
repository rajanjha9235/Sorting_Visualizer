import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { FaCopy, FaCheck } from 'react-icons/fa';

function BubbleSort() {

  const [language, setLanguage] = useState("cpp");

  const codeSnippets = {
    python: `
def bubble_sort(arr):
  n = len(arr)
  for i in range(n):
    for j in range(0, n-i-1):
      if arr[j] > arr[j+1]:  # Swap
        arr[j], arr[j+1] = arr[j+1], arr[j]
  return arr`,
    
  cpp: `
void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
      for (int j = 0; j < n-i-1; j++) {
        if (arr[j] > arr[j+1]) {  // Swap
            std::swap(arr[j], arr[j+1]);
        }
      }
    }
  }`,
    java: `
public static void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
      for (int j = 0; j < n-i-1; j++) {
        if (arr[j] > arr[j+1]) {  // Swap
            int temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
        }
      }
    }
  }`
  };

  const [copyStatus, setCopyStatus] = useState('Copy Code');

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopyStatus('Copied!');
    setTimeout(() => setCopyStatus('Copy Code'), 2000);
  };

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-4xl text-center font-bold mb-8">Bubble Sort</h1>
      <p className="text-lg">
        Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
      </p>

      <h2 className="text-2xl font-bold mt-8">How it works?</h2>
      <p className="text-lg">
        Bubble Sort is a simple algorithm which is used to sort a given set of n elements provided in form of an array with n number of elements. Bubble Sort compares all the element one by one and sort them based on their values.
      </p>

      <h2 className="text-2xl font-bold mt-8">Time Complexity</h2>
      <p className="text-lg">
        The time complexity of Bubble Sort is O(n^2) in both worst and average cases, because the entire array needs to be iterated for every element.
      </p>

      <h2 className="text-2xl font-bold mt-8">Space Complexity</h2>
      <p className="text-lg">
        The space complexity for Bubble Sort is O(1), because only a single additional memory space is required i.e. for temp variable.
      </p>

      <h2 className="text-2xl font-bold mt-8">When to use Bubble Sort?</h2>
      <p className="text-lg">
        Bubble Sort is a simple sorting algorithm which is used when the number of elements in the array is small. It is not suitable for large datasets as its average and worst case complexities are of Ο(n^2) where n is the number of items.
      </p>

      <h2 className="text-2xl font-bold mt-8">Code Implementation</h2>

      <div className="relative">
        <div className="absolute top-2 left-2 z-10 flex space-x-1 text-white">
          
          <button onClick={() => setLanguage("cpp")}
            className={`${language === "cpp" ? "bg-[rgb(0,35,64)]" : "bg-transparent"} px-2 py-1 rounded`}>
            C++
          </button>
          <span>|</span>
          
          <button onClick={() => setLanguage("java")}
            className={`${language === "java" ? "bg-[rgb(0,35,64)]" : "bg-transparent"} px-2 py-1 rounded`}>
            Java
          </button> 
          <span >|</span>
          
          <button onClick={() => setLanguage("python")}
            className={`${language === "python" ? "bg-[rgb(0,35,64)]" : "bg-transparent"} px-2 py-1 rounded`}>
            Python
          </button>
        </div>

        <SyntaxHighlighter language={language} style={nightOwl} className="rounded-md m-9">
          {codeSnippets[language]}
        </SyntaxHighlighter>

        <button
          onClick={() => copyToClipboard(codeSnippets[language])}
          className="absolute top-2 right-2 text-white px-2 py-1 rounded flex items-center space-x-2"
        >
          {copyStatus === 'Copy Code' ? <FaCopy/> : <FaCheck />}
          <span>{copyStatus}</span>
        </button>
      </div>
    </div>
  );
}

export default BubbleSort;