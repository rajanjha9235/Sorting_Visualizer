function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="w-full flex flex-col sm:flex-row justify-between items-center mt-8 py-4 border-t bg-gray-800 text-white px-4">
      
      <p>&copy; {currentYear} Rajan Jha</p>
      
      <div className="flex mt-4 sm:mt-0">
        
        <a href="https://github.com/rajanjha9235/Sorting_Visualizer" target="_blank" rel="noopener noreferrer">
          <img src="/Sorting_Visualizer/GitHub-Mark.png" alt="GitHub" title="Source Code" className="w-8 h-8 rounded-full" />
        </a>
        
        <a href="https://www.linkedin.com/in/rajanjha9235" target="_blank" rel="noopener noreferrer" className="ml-4">
          <img src="/Sorting_Visualizer/LinkedIn-Logo.png" alt="LinkedIn" className="w-full h-8 rounded-full" />
        </a>

        <a href="https://leetcode.com/rajanjha9235" target="_blank" rel="noopener noreferrer" className="ml-4">
          <img src="/Sorting_Visualizer/LeetCode-Logo.png" alt="LeetCode" className="w-8 h-8 rounded-full" />
        </a>

        <a href="mailto:rajanjha9235@gmail.com" target="_blank" rel="noopener noreferrer" className="ml-4">
          <img src="/Sorting_Visualizer/Gmail-Logo.webp" alt="Gmail" className="w-8 h-8 " />
        </a>
      </div>

    </footer>
  );
}

export default Footer;
