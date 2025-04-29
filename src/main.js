async function loadDivContent(url, targetId) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();
      document.getElementById(targetId).innerHTML = html;
    } catch (error) {
      console.error(`Failed to load content from ${url} into #${targetId}:`, error);
      document.getElementById(targetId).innerHTML = '<p>Error loading content.</p>';
    }
}  

loadDivContent('/pages/home.html', 'home');
loadDivContent('/pages/folder.html', 'folder');
loadDivContent('/pages/recent.html', 'recent');
loadDivContent('/pages/todo.html', 'todo');