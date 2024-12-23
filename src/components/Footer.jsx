function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex justify-between items-center mt-8 py-4 border-t bg-gray-800 text-white">
      <p>&copy; {currentYear} Rajan Jha</p>
      <div className="flex">
        <a href="https://github.com/rajanjha9235/Sorting_Visualizer" target="_blank" rel="noopener noreferrer">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" style={{ width: '24px', height: '24px' }} />
        </a>
        <a href="https://www.linkedin.com/in/rajanjha9235" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" style={{ width: '24px', height: '24px', marginLeft: '10px' }} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
