import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { FaCopy, FaCheck } from 'react-icons/fa';

function SelectionSort() {
  const [language, setLanguage] = useState("cpp");

  const codeSnippets = {
    python: `
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr
`,
    cpp: `
void selectionSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        std::swap(arr[min_idx], arr[i]);
    }
}
`,
    java: `
public static void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}
`
  };

  const [copyStatus, setCopyStatus] = useState('Copy Code');

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    setCopyStatus('Copied!');
    setTimeout(() => setCopyStatus('Copy Code'), 2000);
  };

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-4xl text-center font-bold mb-8">Selection Sort</h1>
      <p className="text-lg">
        Selection Sort is a simple sorting algorithm that divides the input list into two parts: the sorted part and the unsorted part. It repeatedly selects the smallest (or largest) element from the unsorted part and moves it to the sorted part.
      </p>

      <h2 className="text-2xl font-bold mt-8">How it works?</h2>
      <p className="text-lg">
        The algorithm maintains two subarrays in a given array. In every iteration, it finds the minimum element in the unsorted part and swaps it with the first element of the unsorted part.
      </p>

      <h2 className="text-2xl font-bold mt-8">Time Complexity</h2>
      <p className="text-lg">
        The time complexity of Selection Sort is O(n²) for both average and worst cases, as it involves nested iterations.
      </p>

      <h2 className="text-2xl font-bold mt-8">Space Complexity</h2>
      <p className="text-lg">
        The space complexity for Selection Sort is O(1), as it requires only a constant amount of extra space.
      </p>

      <h2 className="text-2xl font-bold mt-8">When to use Selection Sort?</h2>
      <p className="text-lg">
        Selection Sort is useful for small datasets or when memory usage is critical. It is not efficient for large datasets due to its O(n²) time complexity.
      </p>

      <h2 className="text-2xl font-bold mt-8">Code Implementation</h2>

      <div className="relative">
        <div className="absolute top-2 left-2 z-10 flex space-x-1 text-white">
          <button
            onClick={() => setLanguage("cpp")}
            className={`${language === "cpp" ? "bg-[rgb(0,35,64)]" : "bg-transparent"} px-2 py-1 rounded`}>
            C++
          </button>
          <span>|</span>
          <button
            onClick={() => setLanguage("java")}
            className={`${language === "java" ? "bg-[rgb(0,35,64)]" : "bg-transparent"} px-2 py-1 rounded`}>
            Java
          </button>
          <span>|</span>
          <button
            onClick={() => setLanguage("python")}
            className={`${language === "python" ? "bg-[rgb(0,35,64)]" : "bg-transparent"} px-2 py-1 rounded`}>
            Python
          </button>
        </div>

        <SyntaxHighlighter language={language} style={nightOwl} className="rounded-md m-9">
          {codeSnippets[language]}
        </SyntaxHighlighter>

        <button
          onClick={() => copyToClipboard(codeSnippets[language])}
          className="absolute top-2 right-2 text-white px-2 py-1 rounded flex items-center space-x-2">
          {copyStatus === 'Copy Code' ? <FaCopy /> : <FaCheck />}
          <span>{copyStatus}</span>
        </button>
      </div>
    </div>
  );
}

export default SelectionSort;
