import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { FaCopy, FaCheck } from 'react-icons/fa';

function QuickSort() {
  const [language, setLanguage] = useState("cpp");

  const codeSnippets = {
    python: `
def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)
`,
    cpp: `
int partition(int arr[], int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);

    for (int j = low; j <= high - 1; j++) {
        if (arr[j] < pivot) {
            i++;
            std::swap(arr[i], arr[j]);
        }
    }
    std::swap(arr[i + 1], arr[high]);
    return (i + 1);
}

void quickSort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
`,
    java: `
public static int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = (low - 1);
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    return i + 1;
}

public static void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
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
      <h1 className="text-4xl text-center font-bold mb-8">Quick Sort</h1>
      <p className="text-lg">
        Quick Sort is a Divide and Conquer algorithm that selects a pivot element and partitions the array around it, sorting the elements recursively.
      </p>

      <h2 className="text-2xl font-bold mt-8">How it works?</h2>
      <p className="text-lg">
        A pivot element is chosen, and the array is partitioned so that elements smaller than the pivot are on the left and those greater are on the right. This process is repeated for the subarrays.
      </p>

      <h2 className="text-2xl font-bold mt-8">Time Complexity</h2>
      <p className="text-lg">
        Quick Sort has a time complexity of O(n log n) on average and O(n²) in the worst case (when the pivot divides poorly).
      </p>

      <h2 className="text-2xl font-bold mt-8">Space Complexity</h2>
      <p className="text-lg">
        Quick Sort requires O(log n) additional space for the recursive stack.
      </p>

      <h2 className="text-2xl font-bold mt-8">When to use Quick Sort?</h2>
      <p className="text-lg">
        Quick Sort is preferred for datasets that fit in memory and where average-case performance is sufficient.
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

export default QuickSort;
