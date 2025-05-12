// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab links and content panel
    const tabLinks = document.querySelectorAll('.tab-link');
    const contentPanel = document.getElementById('side-panel-content');
    
    // Base URL for GitHub Pages
    const baseUrl = 'https://wrteam-in.github.io/common_app_doc/GeneralSettings';
    
    // Function to load documentation
    async function loadDocumentation(tabName) {
        try {
            // Show loading state
            contentPanel.innerHTML = '<div class="loading">Loading documentation...</div>';
            
            // Fetch content from GitHub Pages
            const response = await fetch(`${baseUrl}/${tabName}/`, {
                headers: {
                    'Accept': 'text/html',
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const html = await response.text();
            
            // Create a temporary div to parse the HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            
            // Extract the main content
            const mainContent = tempDiv.querySelector('.sec-content');
            if (!mainContent) {
                throw new Error('Content not found');
            }
            
            // Create a new div for the content
            const contentDiv = document.createElement('div');
            contentDiv.className = 'sec-content';
            
            // Process the content
            let content = mainContent.innerHTML;
            
            // Fix image paths
            content = content.replace(
                /src="(?!http)(.*?)"/g,
                (match, path) => {
                    if (path.startsWith('./')) {
                        return `src="${baseUrl}/${tabName}/${path.substring(2)}"`;
                    } else if (path.startsWith('/')) {
                        return `src="https://wrteam-in.github.io${path}"`;
                    } else {
                        return `src="${baseUrl}/${tabName}/${path}"`;
                    }
                }
            );
            
            // Fix links
            content = content.replace(
                /href="(?!http)(.*?)"/g,
                (match, path) => {
                    if (path.startsWith('./')) {
                        return `href="${baseUrl}/${tabName}/${path.substring(2)}"`;
                    } else if (path.startsWith('/')) {
                        return `href="https://wrteam-in.github.io${path}"`;
                    } else {
                        return `href="${baseUrl}/${tabName}/${path}"`;
                    }
                }
            );
            
            // Update the content panel
            contentDiv.innerHTML = content;
            contentPanel.innerHTML = '';
            contentPanel.appendChild(contentDiv);
            
            // Add active class to the clicked tab
            tabLinks.forEach(link => {
                link.classList.remove('active');
                if (link.dataset.tab === tabName) {
                    link.classList.add('active');
                }
            });
            
        } catch (error) {
            console.error('Error loading documentation:', error);
            contentPanel.innerHTML = `
                <div class="error">
                    <h3>Error Loading Documentation</h3>
                    <p>${error.message}</p>
                    <p>Please try again later or contact support if the problem persists.</p>
                </div>
            `;
        }
    }
    
    // Add click event listeners to tab links
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabName = this.dataset.tab;
            loadDocumentation(tabName);
        });
    });
    
    // Load the first tab by default
    if (tabLinks.length > 0) {
        loadDocumentation(tabLinks[0].dataset.tab);
    }
}); 