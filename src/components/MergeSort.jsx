import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";
import { FaCopy, FaCheck } from 'react-icons/fa';

function MergeSort() {
  const [language, setLanguage] = useState("cpp");

  const codeSnippets = {
    python: `
def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]

        merge_sort(L)
        merge_sort(R)

        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1

        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1

        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
`,
    cpp: `
void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    int L[n1], R[n2];
    for (int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

void mergeSort(int arr[], int l, int r) {
    if (l >= r)
        return;

    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}
`,
    java: `
public static void mergeSort(int[] arr, int l, int r) {
    if (l < r) {
        int m = (l + r) / 2;

        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

public static void merge(int[] arr, int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;

    int[] L = new int[n1];
    int[] R = new int[n2];

    for (int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
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
      <h1 className="text-4xl text-center font-bold mb-8">Merge Sort</h1>
      <p className="text-lg">
        Merge Sort is a Divide and Conquer algorithm that splits the array into halves, sorts them, and then merges them back together.
      </p>

      <h2 className="text-2xl font-bold mt-8">How it works?</h2>
      <p className="text-lg">
        The array is recursively divided into two halves until it can no longer be divided. Then, these halves are merged back in a sorted manner.
      </p>

      <h2 className="text-2xl font-bold mt-8">Time Complexity</h2>
      <p className="text-lg">
        Merge Sort has a time complexity of O(n log n) in all cases (best, average, and worst).
      </p>

      <h2 className="text-2xl font-bold mt-8">Space Complexity</h2>
      <p className="text-lg">
        Merge Sort requires O(n) additional space for the temporary arrays used during merging.
      </p>

      <h2 className="text-2xl font-bold mt-8">When to use Merge Sort?</h2>
      <p className="text-lg">
        Merge Sort is preferred for sorting linked lists and for datasets where stability and guaranteed performance are crucial.
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

export default MergeSort;
