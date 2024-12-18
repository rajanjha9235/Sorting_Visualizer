import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { FaCopy, FaCheck } from 'react-icons/fa';

function InsertionSort() {
  const [language, setLanguage] = useState("cpp");

  const codeSnippets = {
    python: `
def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr
`,
    cpp: `
void insertionSort(int arr[], int n) {
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
`,
    java: `
public static void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
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
      <h1 className="text-4xl text-center font-bold mb-8">Insertion Sort</h1>
      <p className="text-lg">
        Insertion Sort is a simple sorting algorithm that builds the sorted array one item at a time. It is much like sorting playing cards in your hands.
      </p>

      <h2 className="text-2xl font-bold mt-8">How it works?</h2>
      <p className="text-lg">
        The algorithm picks elements one by one and places them in their correct position relative to the already sorted elements.
      </p>

      <h2 className="text-2xl font-bold mt-8">Time Complexity</h2>
      <p className="text-lg">
        The time complexity of Insertion Sort is O(n²) in the worst and average cases. For already sorted arrays, the time complexity is O(n).
      </p>

      <h2 className="text-2xl font-bold mt-8">Space Complexity</h2>
      <p className="text-lg">
        The space complexity of Insertion Sort is O(1), as it is an in-place sorting algorithm.
      </p>

      <h2 className="text-2xl font-bold mt-8">When to use Insertion Sort?</h2>
      <p className="text-lg">
        Insertion Sort is useful for small datasets or when the data is already partially sorted. It is inefficient for large datasets due to its O(n²) time complexity.
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

export default InsertionSort;
